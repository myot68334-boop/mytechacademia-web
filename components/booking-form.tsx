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

  const options = useMemo(() => copy.topicOptions, [copy.topicOptions]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `${copy.name}: ${formData.get("name") ?? ""}`,
      `${copy.email}: ${formData.get("email") ?? ""}`,
      `${copy.contact}: ${formData.get("contact") ?? ""}`,
      `${copy.topic}: ${formData.get("topic") ?? ""}`,
      `${copy.level}: ${formData.get("level") ?? ""}`,
      "",
      `${copy.message}:`,
      `${formData.get("message") ?? ""}`,
    ];

    const href = `mailto:hello@mytechacademia.com?subject=${encodeURIComponent(
      copy.mailSubject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
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

      <button className="cta-chip cta-chip--solid booking-form__submit" type="submit">
        {copy.submit}
      </button>
      <p className="booking-form__note">{copy.note}</p>
    </form>
  );
}
