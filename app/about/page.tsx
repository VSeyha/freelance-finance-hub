import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SoloFinance Hub | Editorial Standards & Methodology",
  description: "Learn about SoloFinance Hub, our creator background, financial engineering methodology, and mission.",
};

export default function AboutPage() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
        About SoloFinance Hub
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginBottom: "2rem" }}>
        SoloFinance Hub was founded by veteran freelance engineering and financial consultants to replace outdated, misleading corporate compensation formulas with realistic math for independent professionals.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          Our Mission & Methodology
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Traditional financial calculators assume an employer is paying half of your payroll tax, funding your health insurance, supplying your laptop, and compensating you for unbillable water-cooler chatter. For the 70+ million freelance and contract workers globally, this false assumption leads directly to severe undercharging, chronic cash flow shortages, and tax-season panic.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Every calculator on this hub reverse-engineers finances from real-world variables: effective net take-home requirements, mandatory self-employment taxes (including US FICA 15.3%), realistic billable utilization caps (20–28 hrs/week), and contingency reserves.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
          Editorial Integrity & E-E-A-T Standards
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          All guides and benchmark tables are researched against public labor statistics, CPA tax guidelines, and verified marketplace contractor studies. While our calculators provide accurate mathematical models, they are intended for educational planning and do not replace certified CPA or legal counsel.
        </p>
      </section>
    </main>
  );
}
