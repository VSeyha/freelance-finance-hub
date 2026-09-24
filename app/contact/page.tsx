import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SoloFinance Hub",
  description: "Contact the SoloFinance Hub team with suggestions, feature requests, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
        Contact Support & Editorial Team
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        Have questions about our calculation models, spotted an issue, or want to suggest a new tool for independent workers? Reach out to us.
      </p>

      <form
        action="#"
        method="post"
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
            style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}
          >
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Alex Morgan"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-subtle)",
              background: "rgba(15, 23, 42, 0.6)",
              color: "var(--text-primary)",
              fontSize: "0.9375rem",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}
          >
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            placeholder="alex@example.com"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-subtle)",
              background: "rgba(15, 23, 42, 0.6)",
              color: "var(--text-primary)",
              fontSize: "0.9375rem",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            required
            placeholder="Describe your inquiry or feedback..."
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-subtle)",
              background: "rgba(15, 23, 42, 0.6)",
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
            boxShadow: "0 4px 12px rgba(16, 185, 129, 0.35)",
          }}
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
