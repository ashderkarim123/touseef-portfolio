"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div className="form-field">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" placeholder="Touseef Ali" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="How can I help you?" required />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={loading}>
          {loading ? "Sending…" : "Send Message →"}
        </button>
        {status === "success" && (
          <p className="form-status success">✓ Message sent! I'll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="form-status error">✗ Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
