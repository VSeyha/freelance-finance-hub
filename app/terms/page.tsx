import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SoloFinance Hub",
  description:
    "Terms and conditions of use for SoloFinance Hub financial calculators, estimation algorithms, and editorial guides.",
};

export default function TermsPage() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
        Terms of Service
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        Last Revised: September 2026
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          1. Acceptance of Terms
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          By accessing and using SoloFinance Hub (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service, all applicable laws, and any relevant third-party policies governing online software utilities. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          2. Permitted Use & Professional Business Tools
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
          SoloFinance Hub provides specialized financial calculation models intended exclusively for independent contractors, freelancers, consultants, and business owners for legitimate professional and educational purposes.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          You agree not to misuse our services, including attempting to interfere with site operations, injecting malicious code, or deploying automated bots, web scrapers, or scripts designed to artificially simulate user interaction or tamper with third-party advertising measurements.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          3. Educational Disclaimer & Professional Counsel
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          The calculators, tax schedules, late interest figures, and rate guides provided on this site are mathematical models generated for informational and planning purposes only. They do not constitute formal certified public accounting (CPA), financial, legal, or tax advice. Tax codes and labor laws differ significantly by jurisdiction; users must consult a licensed professional before filing tax returns or signing legally binding contracts.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          4. Third-Party Advertising & Partner Links
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          SoloFinance Hub displays advertisements served by third-party vendor partners, including Google AdSense. Google and its affiliated ad networks serve advertisements based on user interactions. We do not endorse or guarantee the products, services, or claims displayed within third-party advertising units.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          5. Intellectual Property
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          All original calculators, code, branding, editorial guides, and interface designs are the intellectual property of SoloFinance Hub. You may not replicate, reverse engineer, or redistribute our proprietary software code or content for commercial syndication without prior written consent.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          6. Limitation of Liability
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          To the maximum extent permitted by applicable law, SoloFinance Hub and its operators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our calculation tools, including but not limited to underpayment penalties, lost revenue, or commercial disputes.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          7. Contact Information
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Questions regarding these Terms of Service may be submitted through our contact page or directed to editorial@solofinancehub.com.
        </p>
      </section>
    </main>
  );
}
