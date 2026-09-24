import type { Metadata } from "next";
import ProjectPricingCalculator from "@/components/ProjectPricingCalculator";
import AdSlot from "@/components/AdSlot";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Freelance Project Pricing Calculator: Flat Fee & Margin Tool | SoloFinance",
  description:
    "Calculate profitable flat fees, revision scope buffers, direct software asset costs, and milestone payments for client proposals without underbidding.",
  keywords: [
    "project pricing calculator",
    "freelance flat fee calculator",
    "scope creep buffer pricing",
    "milestone payment schedule",
    "value based pricing formula",
  ],
  openGraph: {
    title: "Freelance Project Pricing Calculator | SoloFinance Hub",
    description:
      "Price client projects with confidence. Turn hours and expenses into profitable, risk-buffered fixed quotes with structured milestone payments.",
    type: "website",
  },
};

export default function ProjectPricingCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is fixed-price billing generally more profitable than hourly billing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hourly billing creates an inherent conflict of interest: the faster and more skilled you become, the less you get paid for delivering identical value. Fixed pricing decouples your earnings from elapsed hours, allowing you to capture high effective hourly rates when you work efficiently, while giving clients cost certainty."
        }
      },
      {
        "@type": "Question",
        "name": "How much buffer should I add for scope creep and client revisions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For well-defined briefs with established corporate clients, a 15% to 20% buffer is typical. For early-stage startups, unvetted clients, or vaguely defined scopes, add a 25% to 35% buffer to account for ambiguous feedback loops, delays, and out-of-scope requests."
        }
      },
      {
        "@type": "Question",
        "name": "What is the recommended deposit structure for freelance projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The industry gold standard is a 50% upfront non-refundable deposit before project kickoff, 25% upon completion and client review of the primary milestone, and the final 25% prior to final asset release, deployment, or copyright transfer."
        }
      },
      {
        "@type": "Question",
        "name": "How do I handle clients who request changes outside the agreed scope?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never do out-of-scope work for free. Politely respond: 'I would be delighted to build that feature for you! Because it falls outside our signed statement of work, I will prepare a separate Change Order with its own timeline and fixed fee for your sign-off before we proceed.'"
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Freelance Project Pricing Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Interactive fixed fee and profit margin calculator for freelancers and agencies quoting client deliverables."
  };

  return (
    <main className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <div className="container">
        {/* Header & Context */}
        <section className={styles.pageHeader}>
          <div className={styles.categoryBadge}>
            <span>Deliverable Pricing Engine</span>
          </div>
          <h1 className={styles.title}>
            Project Pricing Calculator: Flat Fee, Scope Buffer & Margin Tool
          </h1>
          <p className={styles.subtitle}>
            Stop losing money on fixed-price projects. Calculate accurate client quotes by factoring in
            internal labor costs, pass-through expenses, revision buffers, and value profit margins.
          </p>
          <div className={styles.warningCallout}>
            ⚠️ <strong>The Scope Creep Trap:</strong> Quoting simple (Hours × Rate) without a buffer is why fixed-fee projects fail. Without built-in revision allowances and profit markups, unexpected client changes quickly eat into your personal take-home pay.
          </div>
        </section>

        {/* Interactive Calculator */}
        <ProjectPricingCalculator />

        {/* 30px+ clearance before ad */}
        <AdSlot slotId="project-pricing-mid-banner" adFormat="horizontal" />

        {/* Editorial Content (800+ Words) */}
        <article className={styles.editorialSection}>
          <div className={styles.editorialBlock}>
            <h2>The Math Behind Profitable Fixed-Fee Pricing</h2>
            <p>
              Transitioning from hourly billing to fixed project pricing is the most proven mechanism for increasing freelance income. However, flat-rate pricing carries risk: if a project takes twice as long as anticipated, your effective hourly rate gets cut in half.
            </p>
            <p>
              To safely quote fixed bids, your fee must be engineered using a risk-adjusted formula:
            </p>

            <div className={styles.formulaBox}>
              <div className={styles.formulaStep}>
                <strong>Step 1: Raw Direct Cost of Delivery</strong>
                <code>Direct Costs = (Estimated Production Hours × Internal Baseline Rate) + Direct Expenses</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 2: Apply the Scope Creep & Revision Buffer</strong>
                <code>Risk-Adjusted Baseline = Direct Costs × (1 + Revision Buffer %)</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 3: Add the Value Premium / Profit Margin</strong>
                <code>Recommended Fixed Quote = Risk-Adjusted Baseline × (1 + Profit Margin %)</code>
              </div>
            </div>

            <p>
              Let us analyze an example: suppose a web redesign requires 60 hours of focused production at an internal baseline rate of $110/hour ($6,600 labor). Software licenses and stock photography add $450 in direct pass-through costs, totaling $7,050.
            </p>
            <p>
              Applying a standard 20% revision buffer shields you against $1,410 in unexpected delays, bringing the baseline to $8,460. Adding a 25% value profit margin ($2,115) produces a recommended fixed quote of <strong>$10,575</strong>. If you execute efficiently within the initial 60 hours, your effective hourly yield jumps from $110/hr to <strong>$168.75/hr</strong>.
            </p>
          </div>

          <div className={styles.editorialBlock}>
            <h2>How to Bulletproof Your Statement of Work (SOW) Against Scope Creep</h2>
            <p>
              Adding a calculation buffer is only half the battle. Your client contract and statement of work must clearly delineate what is included and what triggers an additional invoice:
            </p>
            <ul>
              <li>
                <strong>Define Exact Deliverables:</strong> Specify concrete deliverables (e.g. &ldquo;Five responsive page layouts in Figma and corresponding React code&rdquo;) rather than open-ended goals (&ldquo;Help build the website&rdquo;).
              </li>
              <li>
                <strong>Cap Revision Cycles:</strong> Explicitly state: &ldquo;Pricing includes two rounds of consolidated revisions per milestone. Additional revision cycles will be billed at our standard rate of $125/hr.&rdquo;
              </li>
              <li>
                <strong>Mandate Single Point of Contact:</strong> Require the client to appoint a single authorized stakeholder who gathers and consolidates feedback before submitting it to you, preventing conflicting stakeholder requests.
              </li>
              <li>
                <strong>Include a Written Change Order Clause:</strong> Provide a formal mechanism for new features requested mid-project. When a client requests extra features, reply with a brief one-page change order specifying the supplemental fee and delivery extension.
              </li>
            </ul>
          </div>

          <div className={styles.editorialBlock}>
            <h2>Milestone Payment Structures: Protecting Your Cash Flow</h2>
            <p>
              Never start work without money in the bank. For project-based pricing, the payment schedule directly protects you from client non-payment and cancellation:
            </p>
            <ul>
              <li>
                <strong>50 / 25 / 25 Structure (Recommended for $3,000 to $20,000 projects):</strong> 50% upfront deposit before work begins, 25% upon delivery of the primary milestone (e.g. wireframes or initial draft), and 25% prior to final asset delivery or live launch.
              </li>
              <li>
                <strong>33 / 33 / 34 Structure (Recommended for larger $20,000+ contracts):</strong> 33% upfront kickoff deposit, 33% at project midpoint, and 34% upon completion.
              </li>
              <li>
                <strong>Weekly / Bi-Weekly Sprints (For agile advisory & consulting):</strong> Bill a fixed sprint fee in advance every two weeks. If the client fails to fund the upcoming sprint, work pauses immediately.
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className={styles.editorialBlock}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              <details className={styles.faqItem} open>
                <summary className={styles.faqQuestion}>
                  What if a client insists on an hourly rate instead of a fixed quote?
                </summary>
                <div className={styles.faqAnswer}>
                  You can explain: &ldquo;We find fixed pricing provides our clients with complete budget certainty—you know the exact cost upfront with zero surprise overages. However, if you prefer hourly billing, our hourly rate is $X/hr with an estimated range of Y to Z hours, billed weekly with a 20-hour retainer deposit.&rdquo; Most clients gladly choose the fixed fee for predictability.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  What if the client tries to negotiate down the fixed fee?
                </summary>
                <div className={styles.faqAnswer}>
                  Never lower your price without removing scope. If a client has a lower budget, respond: &ldquo;We can certainly meet your $7,500 target budget! To do so, we can remove the secondary custom animation module and launch with three templates instead of five.&rdquo; This preserves your profit margin and teaches the client that features cost money.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  Should I itemize hours on the client proposal?
                </summary>
                <div className={styles.faqAnswer}>
                  No. Keep your hourly estimates strictly internal. In your proposal, present the deliverable phases, business outcomes, milestones, and the total fixed investment. Itemizing hours invites micromanagement where clients debate whether a task should take 4 hours or 2 hours.
                </div>
              </details>
            </div>
          </div>
        </article>

        {/* Bottom Ad Unit */}
        <AdSlot slotId="project-pricing-bottom-banner" adFormat="horizontal" />
      </div>
    </main>
  );
}
