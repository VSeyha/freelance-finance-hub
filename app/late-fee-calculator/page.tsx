import type { Metadata } from "next";
import LateFeeCalculator from "@/components/LateFeeCalculator";
import AdSlot from "@/components/AdSlot";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Invoice Late Fee & Interest Calculator for Freelancers | SoloFinance",
  description:
    "Calculate statutory late payment interest and overdue fees on unpaid client invoices using daily interest accrual formulas and demand notice templates.",
  keywords: [
    "invoice late fee calculator",
    "unpaid invoice interest calculator",
    "statutory late payment interest",
    "freelance overdue invoice letter",
    "prompt payment interest rate",
  ],
  openGraph: {
    title: "Invoice Late Fee & Interest Calculator | SoloFinance Hub",
    description:
      "Calculate exact overdue interest and generate formal past-due payment demand notices to collect unpaid client invoices quickly.",
    type: "website",
  },
};

export default function LateFeeCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I legally charge a late fee if it wasn't in the original contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the United States, you generally cannot retroactively enforce a late penalty fee unless it was agreed upon in the signed contract, statement of work, or accepted payment terms. In the UK and European Union, however, the Late Payment of Commercial Debts Act legally grants statutory interest (Bank of England base rate + 8%) plus fixed compensation charges automatically, even without a specific contract clause."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard commercial late payment interest rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most widely accepted B2B rate is 1.5% per month (equivalent to 18% APR) on overdue balances. State usury laws in the US generally cap commercial interest between 10% and 24% annually depending on jurisdiction."
        }
      },
      {
        "@type": "Question",
        "name": "How should I escalate an overdue client invoice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Follow a structured 4-stage escalation: (1) Friendly courtesy reminder on Day 1 past due, (2) Formal statement of late fees on Day 14 past due, (3) Immediate suspension of services and license hold on Day 30 past due, and (4) Final formal letter before legal action / collections on Day 60 past due."
        }
      },
      {
        "@type": "Question",
        "name": "Does charging late fees damage client relationships?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When handled professionally and specified in advance, charging late fees establishes you as a serious business entity. Most corporate accounting departments understand that late fees are standard credit management. You can also offer to waive the late fee as a one-time courtesy if they remit the principal immediately."
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Invoice Late Fee & Interest Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Financial tool for contractors to calculate daily accrued interest and generate past-due payment demand notices for overdue invoices."
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
            <span>Accounts Receivable Protection</span>
          </div>
          <h1 className={styles.title}>
            Invoice Late Fee Calculator: Accrued Interest & Overdue Notice Tool
          </h1>
          <p className={styles.subtitle}>
            Don&apos;t act as an interest-free bank for slow-paying clients. Calculate exact statutory
            daily interest, apply administrative penalties, and generate formal collection demand letters.
          </p>
          <div className={styles.warningCallout}>
            ⚠️ <strong>Cash Flow Reality:</strong> An estimated 44% of freelancers experience late client payments. Charging standard contractual late fees of 1.5% monthly gives clients a direct financial incentive to prioritize your invoices over other bills.
          </div>
        </section>

        {/* Interactive Calculator */}
        <LateFeeCalculator />

        {/* 30px+ clearance before ad */}
        <AdSlot slotId="late-fee-mid-banner" adFormat="horizontal" />

        {/* Editorial Content (800+ Words) */}
        <article className={styles.editorialSection}>
          <div className={styles.editorialBlock}>
            <h2>The Math Explained: How to Calculate Accrued Daily Invoice Interest</h2>
            <p>
              In business accounting, late payment interest is calculated on a daily 365-day basis rather than compounding monthly. This ensures precise calculation regardless of whether an invoice is 12 days or 74 days overdue.
            </p>

            <div className={styles.formulaBox}>
              <div className={styles.formulaStep}>
                <strong>Step 1: Calculate the Daily Interest Rate</strong>
                <code>Daily Rate = Annual Interest Rate (APR) ÷ 365 days</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 2: Calculate Accrued Interest</strong>
                <code>Accrued Interest = Unpaid Principal × Daily Rate × Number of Days Past Due</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 3: Total Outstanding Balance</strong>
                <code>Total Balance Due = Unpaid Principal + Accrued Interest + Flat Administrative Fee</code>
              </div>
            </div>

            <p>
              For example: suppose a client owes $4,500 on an invoice that is 45 days past due under a contract stipulating 18% annual interest (1.5% monthly). The daily rate is 0.0493% per day ($2.22 per day). Over 45 days, the accrued interest is $99.86. Adding a standard $50 administrative fee brings the updated ledger to <strong>$4,649.86</strong>.
            </p>
          </div>

          <div className={styles.editorialBlock}>
            <h2>Legal Frameworks & Usury Laws by Jurisdiction</h2>
            <p>
              Before assessing late fees, verify that your terms comply with applicable state or national commerce statutes:
            </p>
            <ul>
              <li>
                <strong>United States:</strong> Commercial transactions are governed by state contract law and Uniform Commercial Code (UCC). A standard rate of 1.5% per month (18% per year) is generally enforceable in B2B agreements, provided it was agreed upon in the signed contract or accepted master terms before work commenced. Most states cap commercial interest between 10% and 24% under usury statutes.
              </li>
              <li>
                <strong>United Kingdom:</strong> Under the <em>Late Payment of Commercial Debts (Interest) Act 1998</em>, businesses have a statutory right to claim interest at the Bank of England base rate plus 8%, plus fixed statutory compensation (£40 to £100 per invoice depending on debt size), even if no contract clause exists.
              </li>
              <li>
                <strong>European Union:</strong> The <em>EU Late Payment Directive (2011/7/EU)</em> entitles creditors to statutory interest equal to the European Central Bank reference rate plus 8%, alongside a minimum €40 administrative recovery charge.
              </li>
            </ul>
          </div>

          <div className={styles.editorialBlock}>
            <h2>The 4-Step Professional Invoice Escalation Workflow</h2>
            <p>
              How do you enforce payment without burning client bridges? Treat late payments as routine administrative bookkeeping:
            </p>
            <ul>
              <li>
                <strong>Day 1 Past Due (Friendly Ingestion):</strong> Send a brief, cheerful check-in: &ldquo;Hi team, just checking to confirm whether Invoice #1042 was processed in yesterday&apos;s payment run or if you need another copy of our W-9/remittance details.&rdquo;
              </li>
              <li>
                <strong>Day 14 Past Due (Statement of Late Fees):</strong> Send the formal notice generated by this calculator with updated accrued interest, noting that contractual late fees have taken effect.
              </li>
              <li>
                <strong>Day 30 Past Due (Immediate Work Pause):</strong> Notify the client that all ongoing production, code pushes, or deliverables are paused immediately until the outstanding ledger is settled.
              </li>
              <li>
                <strong>Day 60 Past Due (Final Notice & Collections):</strong> Issue a final formal notice stating that the account will be assigned to external collections or small claims litigation within 10 business days.
              </li>
            </ul>
          </div>

          <div className={styles.editorialBlock}>
            <h2>Sample Contract Clause to Include on Future Agreements</h2>
            <p>
              To ensure full legal enforceability, paste this clause directly into your future master service agreements:
            </p>
            <div className={styles.formulaBox}>
              <code>
                &ldquo;Payment Terms: Invoices are payable within thirty (30) days of issue date (Net 30). Unpaid balances shall accrue interest at the rate of one and a half percent (1.5%) per month (or the maximum statutory rate allowable by law, whichever is less) computed daily from the date due until payment is received in full, together with all costs of collection and reasonable attorney fees.&rdquo;
              </code>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={styles.editorialBlock}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              <details className={styles.faqItem} open>
                <summary className={styles.faqQuestion}>
                  Can I waive the late fee as a negotiation tactic?
                </summary>
                <div className={styles.faqAnswer}>
                  Yes! In fact, that is one of the most effective uses of late fees. When a client expresses surprise at the added interest, reply: &ldquo;I understand how things get delayed in accounting. If your team can release wire payment for the original principal invoice today, I would be happy to waive the $149 late fee as a courtesy.&rdquo; This gives them a compelling urgency trigger to pay immediately.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  Can I withhold client deliverables or copyright if an invoice is overdue?
                </summary>
                <div className={styles.faqAnswer}>
                  Yes, provided your contract includes an &ldquo;Ownership Transfer upon Full Payment&rdquo; clause. Under standard intellectual property law, if your contract specifies that copyright or source code ownership transfers only upon final payment in full, the client does not legally own the deliverables while invoices remain unpaid.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  Does charging late fees ruin relationships with good clients?
                </summary>
                <div className={styles.faqAnswer}>
                  Respectable corporate clients expect late fees in commercial vendor contracts. Communicating matter-of-factly without anger establishes your studio or practice as a professional enterprise.
                </div>
              </details>
            </div>
          </div>
        </article>

        {/* Bottom Ad Unit */}
        <AdSlot slotId="late-fee-bottom-banner" adFormat="horizontal" />
      </div>
    </main>
  );
}
