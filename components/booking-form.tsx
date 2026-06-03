"use client";

import { FormEvent, useMemo, useState } from "react";

type BookingFormCopy = {
  name: string;
  email: string;
  contact: string;
  topic: string;
  topicOptions: readonly string[];
  level: string;
  message: string;
  submit: string;
  note: string;
  mailSubject: string;
};

export function BookingForm({ copy }: { copy: BookingFormCopy }) {
  const [topic, setTopic] = useState(copy.topicOptions[0] ?? "");
  const [status, setStatus] = useState<"idle" | "copying" | "success" | "error">("idle");

  const options = useMemo(() => copy.topicOptions, [copy.topicOptions]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `Name: ${formData.get("name") ?? ""}`,
      `Email: ${formData.get("email") ?? ""}`,
      `Topic: ${formData.get("topic") ?? ""}`,
      `Level: ${formData.get("level") ?? ""}`,
      "",
      "Message:",
      `${formData.get("message") ?? ""}`,
    ];

    try {
      setStatus("copying");
      await navigator.clipboard.writeText(lines.join("\n"));
      setStatus("success");
    } catch (error) {
      console.error("Unable to copy booking message", error);
      setStatus("error");
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field">
          <span>{copy.name}</span>
          <input name="name" type="text" required />
        </label>
        <label className="form-field">
          <span>{copy.email}</span>
          <input name="email" type="email" required />
        </label>
      </div>

      <label className="form-field">
        <span>{copy.contact}</span>
        <input name="contact" type="text" placeholder="Facebook / LINE / Telegram" />
      </label>

      <label className="form-field">
        <span>{copy.topic}</span>
        <select name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="form-field">
        <span>{copy.level}</span>
        <input name="level" type="text" />
      </label>

      <label className="form-field">
        <span>{copy.message}</span>
        <textarea name="message" rows={5} required />
      </label>

      <button
        aria-describedby="booking-form-status"
        className="cta-chip cta-chip--solid booking-form__submit"
        disabled={status === "copying"}
        type="submit"
      >
        {copy.submit}
      </button>
      <p className="booking-form__note">{copy.note}</p>
      <p
        aria-live="polite"
        className="booking-form__status"
        id="booking-form-status"
        role="status"
      >
        {status === "success" ? "Message copied. Please send it via email or chat." : ""}
        {status === "error" ? "Could not copy message. Please try again." : ""}
      </p>
    </form>
  );
}
