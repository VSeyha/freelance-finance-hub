import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Cookie Disclosures | SoloFinance Hub",
  description:
    "Privacy policy, Google AdSense cookie disclosures, GDPR, and CCPA compliance statements for SoloFinance Hub calculators and web tools.",
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
        Privacy Policy & Cookie Disclosures
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        Effective Date: September 2026
      </p>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          1. Client-Side Data Processing (No Financial Storage)
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          SoloFinance calculators operate locally inside your web browser using client-side JavaScript. Any numbers, financial targets, tax estimates, invoice figures, or rates you input into our tools are calculated locally on your personal device. We do not transmit, record, or store your private financial numbers on our servers.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          2. Third-Party Advertising & Google AdSense Disclosures
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          This website displays advertisements served by third-party advertising partners, including Google AdSense.
        </p>
        <ul style={{ color: "var(--text-secondary)", paddingLeft: "1.5rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>
            Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites on the internet.
          </li>
          <li>
            Google&apos;s use of advertising cookies enables it and its partners to serve targeted ads to our users based on their visits to our site and/or other sites across the World Wide Web.
          </li>
          <li>
            Users may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-emerald-light)", textDecoration: "underline" }}
            >
              Google Ads Settings
            </a>
            . Alternatively, you may opt out of third-party vendors&apos; use of cookies for personalized advertising by visiting{" "}
            <a
              href="https://www.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-emerald-light)", textDecoration: "underline" }}
            >
              www.aboutads.info
            </a>
            .
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          3. Web Analytics & Log Data
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Like most web publishers, we may collect standard internet log information such as browser type, operating system, referring pages, and timestamp data. This aggregate information is utilized solely to monitor site performance, improve page loading speed, and optimize accessibility.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          4. GDPR & CCPA Compliance
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA):
        </p>
        <ul style={{ color: "var(--text-secondary)", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>We do not sell personal financial data to third parties.</li>
          <li>You have the right to request clarification on any data processed.</li>
          <li>You can configure your browser to reject cookies or prompt before accepting cookies.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          5. Contacting the Data Controller
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          If you have questions regarding this privacy statement or our cookie practices, please contact our privacy compliance team via our{" "}
          <a href="/contact" style={{ color: "var(--accent-emerald-light)", textDecoration: "underline" }}>
            Contact Page
          </a>
          .
        </p>
      </section>
    </main>
  );
}
