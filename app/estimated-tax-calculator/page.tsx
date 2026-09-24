import type { Metadata } from "next";
import EstimatedTaxCalculator from "@/components/EstimatedTaxCalculator";
import AdSlot from "@/components/AdSlot";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Estimated Quarterly Tax Calculator for Freelancers & 1099 Contractors | SoloFinance",
  description:
    "Calculate your quarterly estimated tax payments (IRS Form 1040-ES), self-employment tax (15.3%), federal tax brackets, and safe harbor requirements.",
  keywords: [
    "quarterly estimated tax calculator",
    "freelance self employment tax calculator",
    "1040-ES tax voucher estimator",
    "safe harbor tax rule freelancer",
    "1099 contractor quarterly taxes",
  ],
  openGraph: {
    title: "Quarterly Estimated Tax Calculator | SoloFinance Hub",
    description:
      "Avoid underpayment penalties. Calculate your exact IRS Form 1040-ES quarterly vouchers, FICA self-employment taxes, and state liabilities.",
    type: "website",
  },
};

export default function EstimatedTaxCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is required to pay quarterly estimated taxes to the IRS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the United States, you must make quarterly estimated payments if you expect to owe at least $1,000 in federal tax for the year after subtracting your withholding and refundable credits, and your withholding and credits will be less than the smaller of 90% of your current year's tax or 100% of your prior year's tax (110% if your prior year AGI exceeded $150,000)."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Self-Employment Tax calculated on 92.35% of profit instead of 100%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The IRS recognizes that traditional employers pay half of FICA payroll taxes and deduct that expense. To simulate equal tax treatment for self-employed individuals, Schedule SE calculates the 15.3% tax on 92.35% (100% minus 7.65%) of your net business profit."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I miss a quarterly estimated tax deadline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you underpay or pay late, the IRS assesses an underpayment penalty (calculated using the current federal short-term interest rate plus 3%, compounded daily) on the unpaid balance for the number of days it is overdue. You can submit payment immediately via IRS Direct Pay to stop interest from accruing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Safe Harbor rule for estimated taxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Safe Harbor rule protects taxpayers from underpayment penalties. If you pay 100% of the total tax shown on your previous year's tax return (or 110% if your prior year Adjusted Gross Income was over $150,000 for single or married filing jointly), the IRS will not penalize you even if your income rises drastically in the current year."
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Estimated Quarterly Tax Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Financial calculator for independent contractors to estimate IRS Form 1040-ES quarterly vouchers, self-employment tax, and safe harbor thresholds."
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
            <span>IRS Form 1040-ES Estimator</span>
          </div>
          <h1 className={styles.title}>
            Quarterly Estimated Tax Calculator for Freelancers & 1099 Contractors
          </h1>
          <p className={styles.subtitle}>
            Independent professionals don&apos;t have an employer withholding taxes from paychecks.
            Estimate your 15.3% self-employment FICA obligations, federal brackets, and quarterly payment vouchers to avoid IRS underpayment penalties.
          </p>
          <div className={styles.warningCallout}>
            ⚠️ <strong>IRS Rule:</strong> If you expect to owe $1,000 or more in federal taxes at year-end, the IRS requires you to make quarterly estimated tax payments four times a year, not just one lump sum in April.
          </div>
        </section>

        {/* Interactive Calculator Widget */}
        <EstimatedTaxCalculator />

        {/* 30px+ clearance before ad unit */}
        <AdSlot slotId="tax-calc-mid-banner" adFormat="horizontal" />

        {/* In-Depth Editorial Content (800+ Words) */}
        <article className={styles.editorialSection}>
          <div className={styles.editorialBlock}>
            <h2>How Self-Employment Tax Works: The 15.3% FICA Breakdown</h2>
            <p>
              When an individual works as a W-2 employee, their employer automatically withholds 7.65% from their gross paycheck for FICA taxes (6.2% for Social Security and 1.45% for Medicare). Behind the scenes, the employer pays an identical matching 7.65% contribution out of company funds.
            </p>
            <p>
              When you become an independent contractor, sole proprietor, single-member LLC, or freelancer, you are considered both the employee and the employer. Consequently, you are legally responsible for paying the entire <strong>15.3% Self-Employment Tax (SE Tax)</strong> on your net earnings.
            </p>

            <div className={styles.formulaBox}>
              <div className={styles.formulaStep}>
                <strong>Step 1: Determine Net Schedule C Profit</strong>
                <code>Net Profit = Gross 1099 Revenue - Allowable Business Expenses</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 2: Apply the 92.35% Statutory Factor</strong>
                <code>Taxable SE Base = Net Profit × 0.9235</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 3: Social Security & Medicare Calculation</strong>
                <code>Social Security = Lesser of (Taxable SE Base, $176,100 Cap) × 12.4%</code>
                <code>Medicare = Taxable SE Base × 2.9% (+ 0.9% for earnings over $200k)</code>
              </div>
              <div className={styles.formulaStep}>
                <strong>Step 4: Above-the-Line AGI Deduction</strong>
                <code>Deductible Half = Total SE Tax × 50% (Deducted on Form 1040 Schedule 1)</code>
              </div>
            </div>

            <p>
              Why does the IRS multiply net profit by <strong>92.35%</strong>? In traditional employment, the employer&apos;s 7.65% payroll contribution is a tax-deductible expense for the employer, meaning employees do not pay income tax on that half. To mirror this benefit for solo entrepreneurs, the IRS calculates your self-employment tax on 92.35% (100% minus 7.65%) of your net profit, and permits you to deduct 50% of the resulting SE tax directly from your Adjusted Gross Income (AGI).
            </p>
          </div>

          <div className={styles.editorialBlock}>
            <h2>IRS Form 1040-ES Deadlines: 2025–2026 Payment Schedule</h2>
            <p>
              A common misconception among first-year freelancers is that &ldquo;quarterly&rdquo; means every 3 calendar months. In reality, the IRS tax payment periods are uneven:
            </p>

            <div className={styles.tableContainer}>
              <table className={styles.deadlinesTable}>
                <thead>
                  <tr>
                    <th>Quarter</th>
                    <th>Income Period Covered</th>
                    <th>Filing & Payment Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.quarterHighlight}>Q1 Payment</td>
                    <td>January 1 – March 31</td>
                    <td><strong>April 15</strong></td>
                  </tr>
                  <tr>
                    <td className={styles.quarterHighlight}>Q2 Payment</td>
                    <td>April 1 – May 31 (2 months)</td>
                    <td><strong>June 15</strong></td>
                  </tr>
                  <tr>
                    <td className={styles.quarterHighlight}>Q3 Payment</td>
                    <td>June 1 – August 31 (3 months)</td>
                    <td><strong>September 15</strong></td>
                  </tr>
                  <tr>
                    <td className={styles.quarterHighlight}>Q4 Payment</td>
                    <td>September 1 – December 31 (4 months)</td>
                    <td><strong>January 15</strong> (following year)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Notice that the second quarter covers only two months (April and May), but the payment is due just two months later on June 15. The fourth quarter covers four months, due on January 15. If a due date falls on a weekend or legal holiday, the payment is due on the next business day.
            </p>
          </div>

          <div className={styles.editorialBlock}>
            <h2>The Safe Harbor Rule: How to Legally Avoid Underpayment Penalties</h2>
            <p>
              Freelance revenue fluctuates month to month. How can you know exactly what you will owe at the end of the year without risking IRS penalties? The IRS provides statutory <strong>Safe Harbor</strong> rules:
            </p>
            <ul>
              <li>
                <strong>The 100% Prior-Year Rule:</strong> If your Adjusted Gross Income (AGI) on your prior year&apos;s tax return was $150,000 or less ($75,000 if married filing separately), you will pay zero underpayment penalties if your four quarterly payments equal at least <strong>100% of the total tax</strong> you paid last year.
              </li>
              <li>
                <strong>The 110% Prior-Year Rule:</strong> If your prior year AGI exceeded $150,000, you must pay at least <strong>110% of last year&apos;s total tax liability</strong> divided into four equal installments.
              </li>
              <li>
                <strong>The 90% Current-Year Rule:</strong> Alternatively, you can pay at least <strong>90% of your actual current-year tax liability</strong>. However, this is harder to calculate if your business grows unexpectedly in Q4.
              </li>
            </ul>
            <p>
              For high-growth freelancers whose income is surging, using the 100%/110% prior-year safe harbor calculation is the safest path. You avoid all IRS penalties during the year and simply remit the remaining balance when you file your return the following April.
            </p>
          </div>

          <div className={styles.editorialBlock}>
            <h2>High-Impact Deductions to Lower Your Taxable 1099 Profit</h2>
            <p>
              Every allowable dollar of business expense deducted on your Schedule C reduces both your federal income tax bracket liability AND your 15.3% self-employment tax. Here are four essential write-offs:
            </p>

            <h3>1. The Qualified Business Income (QBI) Deduction (Section 199A)</h3>
            <p>
              Eligible sole proprietors, LLCs, and S-Corps can deduct up to <strong>20% of their net qualified business income</strong> directly on Form 1040, subject to income thresholds and specified service trade or business (SSTB) phaseouts. This effectively exempts 20% of your business profits from federal income tax.
            </p>

            <h3>2. Self-Employed Health Insurance Deduction</h3>
            <p>
              If you pay for health, dental, and qualified long-term care insurance out of pocket and neither you nor your spouse was eligible for an employer-sponsored plan, 100% of your insurance premiums are deductible as an above-the-line adjustment to income.
            </p>

            <h3>3. Home Office Deduction</h3>
            <p>
              If you use a portion of your home exclusively and regularly for business, you can claim the home office deduction. You can either use the <em>Simplified Method</em> ($5 per square foot up to 300 sq ft, for a flat $1,500 deduction) or the <em>Actual Expense Method</em> (allocating a percentage of rent, utilities, internet, and homeowner insurance).
            </p>

            <h3>4. Tax-Advantaged Retirement Contributions (Solo 401(k) / SEP-IRA)</h3>
            <p>
              Freelancers can contribute both as an &ldquo;employee&rdquo; (up to $23,000/$23,500 salary deferral) and as an &ldquo;employer&rdquo; (up to 20%–25% of net profit), sheltering up to $69,000+ of profits annually from current-year federal income tax.
            </p>
          </div>

          {/* FAQ Section */}
          <div className={styles.editorialBlock}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              <details className={styles.faqItem} open>
                <summary className={styles.faqQuestion}>
                  How do I pay my quarterly estimated taxes?
                </summary>
                <div className={styles.faqAnswer}>
                  The fastest and most secure method is using <strong>IRS Direct Pay</strong> (available at irs.gov/directpay). Select &ldquo;Estimated Tax&rdquo; and &ldquo;Form 1040-ES&rdquo; as the reason. You receive an immediate digital confirmation receipt without needing to mail paper vouchers. Most states also have equivalent online revenue portals.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  What if my income is seasonal or irregular?
                </summary>
                <div className={styles.faqAnswer}>
                  If your income fluctuates significantly throughout the year, you are not locked into four equal payments. You can use the <strong>Annualized Income Installment Method (IRS Form 2210, Schedule AI)</strong>, which computes tax liability based on actual income earned during each individual quarter.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  Do I have to pay state estimated taxes too?
                </summary>
                <div className={styles.faqAnswer}>
                  If you reside in a state with personal income tax (such as California, New York, Pennsylvania, or Georgia), you must also make state estimated tax payments to your state Department of Revenue. States without personal income tax (e.g. Texas, Florida, Washington, Nevada, Wyoming, Tennessee, South Dakota, Alaska) do not require state quarterly vouchers.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  What percentage of each invoice should I save for taxes?
                </summary>
                <div className={styles.faqAnswer}>
                  As a general rule of thumb, most single 1099 contractors earning between $60,000 and $150,000 should transfer <strong>25% to 30%</strong> of every gross invoice payment directly into a separate high-yield business savings account. In high-tax states like California or New York, set aside <strong>30% to 35%</strong>.
                </div>
              </details>
            </div>
          </div>
        </article>

        {/* Bottom Ad Unit */}
        <AdSlot slotId="tax-calc-bottom-banner" adFormat="horizontal" />
      </div>
    </main>
  );
}
