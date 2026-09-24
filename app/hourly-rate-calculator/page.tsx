import type { Metadata } from "next";
import HourlyRateCalculator from "@/components/HourlyRateCalculator";
import AdSlot from "@/components/AdSlot";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Freelance Hourly Rate Calculator: Reverse Engineer Your Pricing | SoloFinance",
  description:
    "Calculate your true minimum and recommended freelance hourly rate based on target take-home pay, business overhead, self-employment taxes, and realistic billable hours.",
  keywords: [
    "freelance hourly rate calculator",
    "consultant day rate calculator",
    "freelance pricing formula",
    "self employment tax buffer",
    "billable utilization rate",
  ],
  openGraph: {
    title: "Freelance Hourly Rate Calculator | SoloFinance Hub",
    description:
      "Stop undercharging. Calculate your realistic billable freelance hourly rate factoring in taxes, overhead expenses, and unpaid vacation.",
    type: "website",
  },
};

export default function HourlyRateCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why can't I just divide my desired corporate salary by 2,080 hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A full-time W-2 employee working 40 hours a week for 52 weeks logs 2,080 hours, but their employer subsidizes half of FICA taxes, provides paid time off, health insurance, and 401(k) matching. Furthermore, freelancers spend 25% to 40% of their time on unbillable administrative work such as client acquisition, invoicing, and proposal writing. Dividing by 2,080 typically underpays a freelancer by 35% to 50%."
        }
      },
      {
        "@type": "Question",
        "name": "What is a realistic billable hours target per week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most successful full-time freelancers sustain between 20 and 28 billable hours per week. Assuming 40 billable hours per week leads directly to burnout because it leaves zero time for bookkeeping, marketing, sales calls, software troubleshooting, or client discovery."
        }
      },
      {
        "@type": "Question",
        "name": "How much should freelancers set aside for taxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the United States, independent contractors must cover both the employee and employer portions of Social Security and Medicare (Self-Employment Tax of 15.3%), plus federal and state income taxes. A safe baseline is to set aside 25% to 35% of net business profit into a dedicated high-yield tax savings account."
        }
      },
      {
        "@type": "Question",
        "name": "Should I quote hourly rates or flat project fees to clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your calculated hourly rate serves as your internal baseline metric (your floor). For client proposals, quoting flat project fees or weekly retainers is usually more profitable because it rewards efficiency and eliminates disputes over itemized hours, while ensuring you never dip below your target hourly rate."
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Freelance Hourly Rate Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Interactive financial tool to reverse engineer freelance hourly rates considering overhead, taxes, and billable utilization."
  };

  return (
    <main className={styles.pageWrapper}>
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <div className="container">
        {/* 1. Header & Context */}
        <section className={styles.pageHeader}>
          <div className={styles.categoryBadge}>
            <span>Freelance Rate Engineering</span>
          </div>
          <h1 className={styles.title}>
            Freelance Hourly Rate Calculator: Reverse Engineer Your Pricing
          </h1>
          <p className={styles.subtitle}>
            Most freelancers undercharge because they calculate rates using corporate W-2 formulas.
            Use this reverse-engineered model to account for self-employment taxes, overhead, non-billable hours, and paid time off.
          </p>
          <div className={styles.warningCallout}>
            ⚠️ <strong>The 2,080-Hour Trap:</strong> Dividing a corporate target salary by 2,080 annual hours ignores self-employment tax (15.3% in the US), software subscriptions, healthcare, and unbillable business development.
          </div>
        </section>

        {/* 2. Interactive Calculator Widget */}
        <HourlyRateCalculator />

        {/* 30px+ Margin Before Ad Unit (AdSense Compliance) */}
        <AdSlot slotId="hourly-calc-mid-unit" adFormat="horizontal" />

        {/* 3. In-Depth Editorial Content (800+ Words) */}
        <article className={styles.editorialSection}>
          <div className={styles.editorialBlock}>
            <h2>The Math Explained: How to Reverse Engineer Your Freelance Hourly Rate</h2>
            <p>
              When transitioning from traditional employment to self-employment, many contractors make the mistake of setting their hourly rate by taking a former salary and dividing it by 2,080 hours (the standard 40-hour workweek multiplied by 52 weeks). This linear calculation fails because it treats a business entity like an employee.
            </p>
            <p>
              To run a sustainable solo business, your pricing must be derived in reverse: starting from your personal take-home lifestyle requirement, adding back mandatory taxes and operational costs, and dividing by your <em>actual billable capacity</em>.
            </p>

            <div className={styles.formulaBox}>
              <div className={styles.formulaStep}>
                <strong>Step 1: Gross Annual Revenue Required</strong>
                <code>Gross Revenue = [Target Take-Home ÷ (1 - Tax Rate)] + Annual Overhead Expenses</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 2: Total Real Billable Hours per Year</strong>
                <code>Billable Hours = (52 - Weeks of Vacation & Downtime) × Weekly Billable Client Hours</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 3: Minimum Break-Even Hourly Rate</strong>
                <code>Base Hourly Rate = Gross Revenue ÷ Billable Hours</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 4: Recommended Market Rate (With Risk & Profit Buffer)</strong>
                <code>Recommended Rate = Base Hourly Rate × (1 + Profit Margin Buffer %)</code>
              </div>
            </div>

            <p>
              Let us walk through an example: suppose your target take-home pay is $85,000 per year. Your annual overhead (health insurance, cloud software, accounting, laptop depreciation) is $14,000. Assuming an effective tax buffer of 28%, your business needs to generate $118,055 in taxable gross income before overhead, resulting in total required revenue of $132,055.
            </p>
            <p>
              If you take 4 weeks off per year (48 working weeks) and maintain 25 billable client hours per week (1,200 annual billable hours), your baseline break-even rate is <strong>$110.05 per hour</strong>. Adding a standard 15% profit buffer brings your recommended rate to <strong>$126.55 per hour</strong>.
            </p>
          </div>

          <div className={styles.editorialBlock}>
            <h2>Understanding Billable Utilization vs. Non-Billable Overhead</h2>
            <p>
              Why can a freelancer rarely bill 40 hours every week? In the corporate world, employees are paid while attending internal all-hands meetings, sorting their inboxes, and chatting by the coffee machine. As a solo operator, you are the chief executive, marketer, salesperson, bookkeeper, and customer support technician.
            </p>
            <p>
              Industry data from over 10,000 independent contractors indicates the following weekly time breakdown:
            </p>
            <ul>
              <li><strong>Billable Client Production (50%–65%):</strong> Deep focused work executing design, code, copywriting, or advisory calls.</li>
              <li><strong>Business Development & Discovery (15%–20%):</strong> Answering inquiries, preparing quotes, holding discovery calls, and writing proposals.</li>
              <li><strong>Administrative & Finance (10%–15%):</strong> Invoicing, expense tracking, chasing late payments, and file organization.</li>
              <li><strong>Skills Development & Marketing (10%):</strong> Portfolio updates, newsletter writing, and continuing education.</li>
            </ul>
            <p>
              If you assume 40 billable hours per week, you will inevitably have to work 60 to 70 hours total to sustain the administrative overhead, leading rapidly to burnout and degraded output quality.
            </p>
          </div>

          <div className={styles.editorialBlock}>
            <h2>Industry Rate Benchmarks: 2025–2026 Averages</h2>
            <p>
              Market rates vary depending on geographic location, depth of specialization, and business outcomes delivered. Below is a curated benchmark table representing typical US and international remote contract rates:
            </p>

            <div className={styles.tableContainer}>
              <table className={styles.benchmarkTable}>
                <thead>
                  <tr>
                    <th>Specialization</th>
                    <th>Junior (1–3 yrs)</th>
                    <th>Mid-Level (3–6 yrs)</th>
                    <th>Senior / Specialist (6+ yrs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.roleHighlight}>Full-Stack Web Developer</td>
                    <td>$45 – $75 / hr</td>
                    <td>$85 – $135 / hr</td>
                    <td>$150 – $225+ / hr</td>
                  </tr>
                  <tr>
                    <td className={styles.roleHighlight}>UI / UX Product Designer</td>
                    <td>$40 – $65 / hr</td>
                    <td>$75 – $120 / hr</td>
                    <td>$130 – $195+ / hr</td>
                  </tr>
                  <tr>
                    <td className={styles.roleHighlight}>B2B SaaS Direct Response Copywriter</td>
                    <td>$35 – $60 / hr</td>
                    <td>$70 – $115 / hr</td>
                    <td>$125 – $200+ / hr</td>
                  </tr>
                  <tr>
                    <td className={styles.roleHighlight}>SEO & Technical Growth Consultant</td>
                    <td>$40 – $70 / hr</td>
                    <td>$75 – $125 / hr</td>
                    <td>$140 – $210+ / hr</td>
                  </tr>
                  <tr>
                    <td className={styles.roleHighlight}>Data Analyst & BI Engineer</td>
                    <td>$50 – $80 / hr</td>
                    <td>$85 – $140 / hr</td>
                    <td>$155 – $240+ / hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.editorialBlock}>
            <h2>Strategic Tips: How to Raise Your Rate Without Losing Clients</h2>
            <h3>1. Anchor Against Business ROI, Not Time Spent</h3>
            <p>
              Clients do not purchase hours; they purchase business outcomes. When discussing project scope, frame your contribution in terms of cost reduction, conversion lift, or delivery speed. A $5,000 project that takes you 20 hours represents an effective $250/hour rate that the client gladly pays if it generates $40,000 in pipeline value.
            </p>

            <h3>2. Grandfather Existing Clients While Pricing New Leads Higher</h3>
            <p>
              Never raise rates across all clients overnight without notice. Announce rate adjustments 60 days in advance to existing long-term clients while immediately quoting all new incoming leads at your updated target rate.
            </p>

            <h3>3. Package Services into Flat-Fee Milestones</h3>
            <p>
              Once you master your internal hourly baseline, consider transitioning to fixed-scope deliverables. Check out our <a href="/project-pricing-calculator" style={{ color: "var(--accent-emerald-light)", textDecoration: "underline" }}>Project Pricing Calculator</a> to determine profitable project flat fees that include revision buffers and contingency allowances.
            </p>
          </div>

          {/* FAQ Section */}
          <div className={styles.editorialBlock}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              <details className={styles.faqItem} open>
                <summary className={styles.faqQuestion}>
                  Why can't I just divide my desired salary by 2,080 hours?
                </summary>
                <div className={styles.faqAnswer}>
                  A full-time W-2 employee working 40 hours a week for 52 weeks logs 2,080 hours, but their employer covers half of their payroll taxes, provides paid time off, subsidized health insurance, and paid equipment. Furthermore, freelancers spend 25% to 40% of their working hours on unbillable business operations (sales, invoicing, support). Dividing by 2,080 leaves you with a massive cash deficit.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  What is a realistic number of billable hours per week?
                </summary>
                <div className={styles.faqAnswer}>
                  Most seasoned independent contractors bill between 20 and 28 hours per week. If you plan for 40 billable hours, you will inevitably have to work 60+ hours per week once you add in proposal writing, invoicing, tax accounting, and client communications.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  How much should I set aside for self-employment taxes?
                </summary>
                <div className={styles.faqAnswer}>
                  In the United States, independent contractors are responsible for both employee and employer portions of Medicare and Social Security (Self-Employment Tax of 15.3%), on top of federal and state income taxes. A safe rule of thumb is setting aside 25% to 35% of all net earnings into a dedicated tax reserve account.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  Should I share my calculated hourly rate with clients?
                </summary>
                <div className={styles.faqAnswer}>
                  Your hourly rate is primarily an internal benchmark—your financial "floor." Whenever possible, present clients with value-anchored project fees or weekly sprint retainers so you are not penalized for working faster as you gain expertise.
                </div>
              </details>
            </div>
          </div>
        </article>

        {/* Bottom Ad Unit with 30px+ clearance */}
        <AdSlot slotId="hourly-calc-bottom-banner" adFormat="horizontal" />
      </div>
    </main>
  );
}
