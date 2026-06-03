"use client";

import { useState } from "react";

type CopyEmailProps = {
  email: string;
  label?: string;
};

export function CopyEmail({
  email,
  label = "Copy Email",
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="cta-chip cta-chip--solid"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
