"use client";

import { useCallback, useState } from "react";
import type { ChatMode } from "../../types/chat";

type StreamHistoryMessage = {
  role: "assistant" | "user";
  content: string;
};

type StreamChatPayload = {
  history: StreamHistoryMessage[];
  message: string;
  mode: ChatMode;
};

type StreamChatOptions = {
  onDone?: (metadata: unknown) => void;
  onToken: (token: string) => void;
  token: string;
};

type StreamErrorPayload = {
  code?: string;
  error?: string;
  message?: string;
};

function parseSseBlock(block: string) {
  const event = block
    .split("\n")
    .find((line) => line.startsWith("event:"))
    ?.replace(/^event:\s?/, "")
    .trim();
  const data = block
    .split("\n")
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.replace(/^data:\s?/, ""))
    .join("\n");

  if (!event || !data) return null;

  try {
    return {
      data: JSON.parse(data) as unknown,
      event,
    };
  } catch {
    return null;
  }
}

function processSseBuffer(
  buffer: string,
  handlers: {
    onDone?: (metadata: unknown) => void;
    onError: (message: string) => void;
    onToken: (token: string) => void;
  },
  flush = false,
) {
  const blocks = buffer.split(/\r?\n\r?\n/);
  const remainder = blocks.pop() ?? "";

  for (const block of blocks) {
    const parsed = parseSseBlock(block);

    if (!parsed) continue;

    if (parsed.event === "token") {
      const nextToken = extractToken(parsed.data);
      if (nextToken) handlers.onToken(nextToken);
    }

    if (parsed.event === "done") {
      handlers.onDone?.(parsed.data);
    }

    if (parsed.event === "error") {
      handlers.onError(getSafeErrorMessage(parsed.data));
    }
  }

  if (flush && remainder.trim()) {
    const parsed = parseSseBlock(remainder);

    if (parsed?.event === "token") {
      const nextToken = extractToken(parsed.data);
      if (nextToken) handlers.onToken(nextToken);
    }

    if (parsed?.event === "done") {
      handlers.onDone?.(parsed.data);
    }

    if (parsed?.event === "error") {
      handlers.onError(getSafeErrorMessage(parsed.data));
    }

    return "";
  }

  return remainder;
}

function getSafeErrorMessage(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return "AI response failed. Please try again.";
  }

  const errorPayload = payload as StreamErrorPayload;

  if (errorPayload.code === "RATE_LIMITED") {
    return "Too many messages. Please wait a minute before sending again.";
  }

  if (errorPayload.code === "DAILY_QUOTA_EXCEEDED") {
    return "Daily AI message limit reached. Please try again tomorrow.";
  }

  return errorPayload.message ?? errorPayload.error ?? "AI response failed. Please try again.";
}

function extractToken(payload: unknown) {
  if (!payload || typeof payload !== "object" || !("content" in payload)) {
    return "";
  }

  const content = payload.content;
  return typeof content === "string" ? content : "";
}

export function useStreamingChat() {
  const [streamError, setStreamError] = useState<string | null>(null);
  const [streaming, setStreaming] = useState(false);

  const streamChat = useCallback(
    async (payload: StreamChatPayload, { onDone, onToken, token }: StreamChatOptions) => {
      setStreamError(null);
      setStreaming(true);

      try {
        const response = await fetch("/api/tech-academia/chat/stream", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok || !response.body) {
          const errorPayload = (await response.json().catch(() => null)) as unknown;
          throw new Error(getSafeErrorMessage(errorPayload));
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let streamFailure: string | null = null;
        const handlers = {
          onDone,
          onError: (message: string) => {
            streamFailure = message;
          },
          onToken,
        };

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          buffer = processSseBuffer(buffer, handlers);

          if (streamFailure) {
            throw new Error(streamFailure);
          }
        }

        buffer += decoder.decode();
        processSseBuffer(buffer, handlers, true);

        if (streamFailure) {
          throw new Error(streamFailure);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "AI response failed. Please try again.";
        setStreamError(message);
        throw error;
      } finally {
        setStreaming(false);
      }
    },
    [],
  );

  return {
    streamChat,
    streamError,
    streaming,
  };
}
