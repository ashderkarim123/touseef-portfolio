"use client";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// HOW TO ACTIVATE:
// 1. Go to https://formspree.io → Sign up free with your email
// 2. Click "New Form" → name it "Portfolio Contact"
// 3. Copy the form ID (looks like: https://formspree.io/f/xpwzabcd)
// 4. Paste ONLY the ID part below (e.g. "xpwzabcd")
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = "xpwzabcd"; // ← Replace with YOUR Formspree form ID

export default function ContactForm() {
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);

    try {
      // Primary: Try the Next.js API route (works when GOOGLE_SCRIPT_URL is set on Vercel)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setLoading(false);
        return;
      }
    } catch {
      // Fallthrough to Formspree backup
    }

    // Fallback: Formspree (guaranteed delivery to your email)
    try {
      const fsRes = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (fsRes.ok) {
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
            <input id="name" name="name" type="text" placeholder="John Smith" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="I need a GHL automation system" required />
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
          <p className="form-status error">✗ Something went wrong. Please email me directly on WhatsApp: +92 334 189 9014</p>
        )}
      </form>
    </div>
  );
}
