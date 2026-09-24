import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SoloFinance Hub | Editorial Standards, Authors & Methodology",
  description:
    "Learn about SoloFinance Hub, our financial engineering methodology, editorial review team, and mission to empower independent workers.",
};

export default function AboutPage() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "820px", margin: "0 auto", lineHeight: 1.8 }}>
      <div style={{ marginBottom: "2rem" }}>
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
          Editorial Transparency & E-E-A-T
        </span>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
        About SoloFinance Hub
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginBottom: "2.5rem" }}>
        SoloFinance Hub was founded by veteran software engineers and independent financial analysts to provide transparent, reverse-engineered financial models designed specifically for freelancers, consultants, and solo contractors worldwide.
      </p>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.45rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          Our Core Mission: Eradicating the 2,080-Hour Trap
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Traditional corporate calculators assume an employer is paying half of your FICA payroll tax, funding health insurance, supplying hardware, and compensating you for water-cooler conversations. For the 70+ million independent workers globally, this false assumption leads directly to severe underpricing, chronic cash-flow shortfalls, and year-end tax surprises.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Every tool on this platform reverse-engineers finances from real-world fundamentals: target take-home requirements, mandatory self-employment taxes (including US FICA 15.3%), realistic billable utilization caps (20–28 hrs/week), and contingency reserves.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.45rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          Editorial Standards & Review Process
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          To ensure strict mathematical accuracy and compliance with current statutory regulations:
        </p>
        <ul style={{ color: "var(--text-secondary)", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>
            <strong>IRS & Regulatory Updates:</strong> Tax formulas, standard deductions, and Social Security wage caps are updated annually following official IRS Form 1040-ES and Department of Labor guidelines.
          </li>
          <li>
            <strong>Marketplace Rate Benchmarks:</strong> Contractor benchmark tables are verified against anonymized marketplace surveys and public labor compensation databases.
          </li>
          <li>
            <strong>Mathematical Verification:</strong> All algorithms are peer-reviewed to guarantee accurate progressive marginal tax slicing, compound late-interest equations, and risk-buffered margin structures.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.45rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          Publisher & Editorial Contact
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          SoloFinance Hub is maintained by an independent editorial team dedicated to freelance financial literacy.
        </p>
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            padding: "1.25rem",
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
          }}
        >
          <p><strong>Publication:</strong> SoloFinance Media & Research</p>
          <p><strong>Editorial Inquiries:</strong> editorial@solofinancehub.com</p>
          <p><strong>Technical Support:</strong> support@solofinancehub.com</p>
          <p>
            For feedback, custom feature requests, or partnership inquiries, visit our{" "}
            <Link href="/contact" style={{ color: "var(--accent-emerald-light)", textDecoration: "underline" }}>
              Contact Page
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
