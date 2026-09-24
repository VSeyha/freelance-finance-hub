"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "calculator-feedback",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--accent-emerald-light)",
            background: "rgba(16, 185, 129, 0.12)",
            padding: "0.25rem 0.65rem",
            borderRadius: "var(--radius-full)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          Reader & User Support
        </span>
        <h1 style={{ fontSize: "2.5rem", marginTop: "0.75rem", color: "var(--text-primary)" }}>
          Contact Our Editorial Team
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
          Have suggestions for new calculators, found an issue, or want to partner with SoloFinance? We respond promptly.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            padding: "1.25rem",
            fontSize: "0.875rem",
          }}
        >
          <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.25rem" }}>
            General & Editorial
          </strong>
          <span style={{ color: "var(--accent-emerald-light)", fontFamily: "var(--font-mono)" }}>
            editorial@solofinancehub.com
          </span>
        </div>
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            padding: "1.25rem",
            fontSize: "0.875rem",
          }}
        >
          <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.25rem" }}>
            Technical & Bug Reports
          </strong>
          <span style={{ color: "var(--accent-emerald-light)", fontFamily: "var(--font-mono)" }}>
            support@solofinancehub.com
          </span>
        </div>
      </div>

      {submitted ? (
        <div
          style={{
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✉️</div>
          <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Thank You! Message Received.
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            We have logged your note and our editorial desk will review your inquiry within 24 to 48 business hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: "1.5rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "var(--radius-sm)",
              background: "rgba(255, 255, 255, 0.08)",
              color: "var(--text-primary)",
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            background: "var(--bg-surface)",
            padding: "2rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div>
            <label
              htmlFor="contact-name"
              style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.4rem" }}
            >
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              placeholder="Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "rgba(15, 23, 42, 0.7)",
                color: "var(--text-primary)",
                fontSize: "0.9375rem",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.4rem" }}
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              autoComplete="email"
              placeholder="sarah@independent.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "rgba(15, 23, 42, 0.7)",
                color: "var(--text-primary)",
                fontSize: "0.9375rem",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.4rem" }}
            >
              Inquiry Subject
            </label>
            <select
              id="contact-subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "rgba(15, 23, 42, 0.7)",
                color: "var(--text-primary)",
                fontSize: "0.9375rem",
                cursor: "pointer",
              }}
            >
              <option value="calculator-feedback">Calculator Feedback / Formula Question</option>
              <option value="feature-request">Feature Request / New Tool Idea</option>
              <option value="editorial">Editorial / Content Correction</option>
              <option value="partnership">Business & Advertising Inquiry</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.4rem" }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              required
              placeholder="Tell us how we can help or what you would like to see improved..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                background: "rgba(15, 23, 42, 0.7)",
                color: "var(--text-primary)",
                fontSize: "0.9375rem",
                fontFamily: "inherit",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "0.875rem",
              borderRadius: "var(--radius-sm)",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "0.9375rem",
              marginTop: "0.5rem",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.35)",
            }}
          >
            Submit Message
          </button>
        </form>
      )}
    </main>
  );
}
