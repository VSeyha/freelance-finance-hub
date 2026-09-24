import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SoloFinance Hub",
  description: "Terms and conditions of use for SoloFinance Hub financial calculators and editorial content.",
};

export default function TermsPage() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
        Terms of Service
      </h1>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          1. Educational Disclaimer
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          The financial calculators, pricing estimators, interest metrics, and tax estimates provided by SoloFinance Hub are for informational and educational purposes only. They do not constitute certified public accounting (CPA) advice, financial planning, or legal counsel.
        </p>
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          2. Accuracy of Calculations
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          While we strive for precision in our algorithms, individual tax laws, local business ordinances, deductions, and tax brackets vary widely across jurisdictions. You should always consult with a licensed professional before filing tax returns or signing client contracts.
        </p>
      </section>
    </main>
  );
}
