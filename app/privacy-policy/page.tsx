import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SoloFinance Hub",
  description: "Privacy policy and cookie disclosures for SoloFinance Hub calculators and tools.",
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Last updated: September 2026
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          1. Information We Collect
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          SoloFinance calculators operate locally in your web browser. Any inputs, financial amounts, tax estimations, or rates entered into our calculator tools are processed entirely client-side on your device and are never transmitted, recorded, or stored on our servers.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          2. Cookies & Advertising (Google AdSense Compliance)
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites on the internet.
        </p>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Users may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-emerald-light)", textDecoration: "underline" }}
          >
            Google Ads Settings
          </a>
          . Alternatively, users can opt out of third-party vendors' use of cookies for personalized advertising by visiting{" "}
          <a
            href="https://www.aboutads.info"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-emerald-light)", textDecoration: "underline" }}
          >
            aboutads.info
          </a>
          .
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          3. Analytics
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          We may use anonymized web analytics to measure aggregate page visits, browser types, and general site performance to optimize user experience.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          4. Contact
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          If you have questions regarding this privacy policy, you may reach out via our contact page.
        </p>
      </section>
    </main>
  );
}
