"use client";

import React, { useState, useId } from "react";
import styles from "./EstimatedTaxCalculator.module.css";

type FilingStatus = "single" | "married_joint" | "head_household";

interface StateTaxOption {
  code: string;
  name: string;
  rate: number;
}

const STATE_OPTIONS: StateTaxOption[] = [
  { code: "NONE", name: "No State Tax (TX, FL, WA, NV, TN, WY, SD, AK)", rate: 0 },
  { code: "LOW", name: "Low State Tax (~3% - e.g. PA, IN, ND)", rate: 3.1 },
  { code: "MED", name: "Moderate State Tax (~5% - e.g. IL, CO, GA, NC, VA)", rate: 5.0 },
  { code: "HIGH", name: "High State Tax (~7.5% - e.g. NY, NJ, OR, MN)", rate: 7.5 },
  { code: "VHIGH", name: "Very High State Tax (~9.5% - e.g. CA, HI)", rate: 9.3 },
];

// 2025/2026 inflation-adjusted Standard Deductions
const STANDARD_DEDUCTIONS: Record<FilingStatus, number> = {
  single: 15000,
  married_joint: 30000,
  head_household: 22500,
};

// 2025/2026 Social Security wage base limit ($176,100)
const SS_WAGE_BASE_CAP = 176100;

interface TaxBracket {
  cap: number;
  rate: number;
}

// 2025/2026 Federal Progressive Income Tax Brackets
function calculateFederalTax(taxableIncome: number, status: FilingStatus): number {
  if (taxableIncome <= 0) return 0;

  const brackets: Record<FilingStatus, TaxBracket[]> = {
    single: [
      { cap: 11925, rate: 0.10 },
      { cap: 48475, rate: 0.12 },
      { cap: 103350, rate: 0.22 },
      { cap: 197300, rate: 0.24 },
      { cap: 250525, rate: 0.32 },
      { cap: 626350, rate: 0.35 },
      { cap: Infinity, rate: 0.37 },
    ],
    married_joint: [
      { cap: 23850, rate: 0.10 },
      { cap: 96950, rate: 0.12 },
      { cap: 206700, rate: 0.22 },
      { cap: 394600, rate: 0.24 },
      { cap: 501050, rate: 0.32 },
      { cap: 751600, rate: 0.35 },
      { cap: Infinity, rate: 0.37 },
    ],
    head_household: [
      { cap: 17000, rate: 0.10 },
      { cap: 64850, rate: 0.12 },
      { cap: 103350, rate: 0.22 },
      { cap: 197300, rate: 0.24 },
      { cap: 250500, rate: 0.32 },
      { cap: 626350, rate: 0.35 },
      { cap: Infinity, rate: 0.37 },
    ],
  };

  let tax = 0;
  let previousCap = 0;

  for (const { cap, rate } of brackets[status]) {
    if (taxableIncome > cap) {
      tax += (cap - previousCap) * rate;
      previousCap = cap;
    } else {
      tax += (taxableIncome - previousCap) * rate;
      break;
    }
  }

  return tax;
}

export default function EstimatedTaxCalculator() {
  const [grossRevenue, setGrossRevenue] = useState<number>(110000);
  const [businessExpenses, setBusinessExpenses] = useState<number>(20000);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single");
  const [stateTaxRate, setStateTaxRate] = useState<number>(5.0);
  const [w2Withholding, setW2Withholding] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const grossId = useId();
  const expensesId = useId();
  const filingId = useId();
  const stateId = useId();
  const w2Id = useId();

  // 1. Net Schedule C Business Profit
  const safeGross = Math.max(grossRevenue, 0);
  const safeExpenses = Math.max(businessExpenses, 0);
  const netProfit = Math.max(safeGross - safeExpenses, 0);

  // 2. Self-Employment Tax (Schedule SE)
  // IRS rule: 92.35% of net profit is subject to SE tax
  const seTaxableIncome = netProfit * 0.9235;

  // Social Security: 12.4% up to annual cap
  const ssTax = Math.min(seTaxableIncome, SS_WAGE_BASE_CAP) * 0.124;

  // Medicare: 2.9% on all net SE earnings + 0.9% additional Medicare above threshold
  const medicareThreshold = filingStatus === "married_joint" ? 250000 : 200000;
  const standardMedicare = seTaxableIncome * 0.029;
  const additionalMedicare =
    seTaxableIncome > medicareThreshold ? (seTaxableIncome - medicareThreshold) * 0.009 : 0;
  const medicareTax = standardMedicare + additionalMedicare;

  const totalSelfEmploymentTax = ssTax + medicareTax;

  // 3. Adjusted Gross Income (AGI) & Deductions
  // Deduct 50% of SE tax from gross income
  const seTaxDeduction = totalSelfEmploymentTax * 0.5;

  // QBI Section 199A Deduction: 20% of net eligible qualified business income
  const eligibleQbiBase = Math.max(netProfit - seTaxDeduction, 0);
  const standardDeduction = STANDARD_DEDUCTIONS[filingStatus];

  // Taxable Federal Income before QBI deduction
  const taxableBeforeQbi = Math.max(eligibleQbiBase - standardDeduction, 0);
  const qbiDeduction = Math.min(eligibleQbiBase * 0.20, taxableBeforeQbi);

  const taxableFederalIncome = Math.max(taxableBeforeQbi - qbiDeduction, 0);

  // 4. Exact Progressive Federal Income Tax
  const federalIncomeTax = calculateFederalTax(taxableFederalIncome, filingStatus);

  // 5. State Income Tax (applied to state taxable base)
  const stateTaxableBase = Math.max(netProfit - (standardDeduction * 0.5), 0);
  const estimatedStateTax = stateTaxableBase * (Math.max(stateTaxRate, 0) / 100);

  // 6. Total Annual Tax Liability after existing W-2 withholdings
  const totalAnnualTaxLiability = Math.max(
    totalSelfEmploymentTax + federalIncomeTax + estimatedStateTax - Math.max(w2Withholding, 0),
    0
  );

  // 7. Quarterly Payment (Divide by 4)
  const quarterlyEstimatedPayment = totalAnnualTaxLiability / 4;

  // Effective Tax Rate on Net Profit
  const effectiveTaxRate = netProfit > 0 ? (totalAnnualTaxLiability / netProfit) * 100 : 0;

  // Recommended Savings Percentage per invoice (tax liability / gross revenue)
  const invoiceTaxReservePct =
    safeGross > 0 ? Math.min(Math.ceil((totalAnnualTaxLiability / safeGross) * 100), 50) : 25;

  const handleCopy = async () => {
    const text = `--- SoloFinance Quarterly Estimated Tax Voucher ---
Net 1099 Profit: $${Math.round(netProfit).toLocaleString()}
Quarterly Estimated Payment: $${Math.round(quarterlyEstimatedPayment).toLocaleString()} / quarter
Annual Total Tax Liability: $${Math.round(totalAnnualTaxLiability).toLocaleString()}
- Self-Employment Tax (FICA 15.3%): $${Math.round(totalSelfEmploymentTax).toLocaleString()}
- Estimated Federal Income Tax: $${Math.round(federalIncomeTax).toLocaleString()}
- Estimated State Income Tax (${stateTaxRate}%): $${Math.round(estimatedStateTax).toLocaleString()}
Recommended Invoice Savings Buffer: ${invoiceTaxReservePct}% of every client payment
Generated via SoloFinance Hub (IRS Form 1040-ES Guidelines)`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {}
  };

  return (
    <div className={styles.calculatorCard} id="tax-calculator-widget">
      <div className={styles.widgetHeader}>
        <div className={styles.badgeRow}>
          <span className={styles.taxBadge}>IRS FORM 1040-ES COMPLIANT</span>
          <span className={styles.yearBadge}>Tax Year 2025–2026 Brackets</span>
        </div>
        <p className={styles.headerNote}>
          Calculates FICA Self-Employment (15.3%), QBI Section 199A deduction, and progressive brackets.
        </p>
      </div>

      <div className={styles.widgetGrid}>
        {/* Left Inputs */}
        <section className={styles.inputsColumn}>
          {/* Gross Business Revenue */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={grossId} className={styles.fieldLabel}>
                Estimated Gross 1099 Revenue
              </label>
              <span className={styles.helperBadge}>Total Invoiced</span>
            </div>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>$</span>
              <input
                id={grossId}
                type="number"
                inputMode="numeric"
                min={0}
                max={1000000}
                step={2500}
                value={grossRevenue || ""}
                onChange={(e) => setGrossRevenue(e.target.value === "" ? 0 : Number(e.target.value))}
                className={styles.numInput}
              />
            </div>
            <input
              type="range"
              min={20000}
              max={300000}
              step={2500}
              value={grossRevenue}
              onChange={(e) => setGrossRevenue(Number(e.target.value))}
              aria-label="Gross Business Revenue Slider"
              className={styles.rangeSlider}
            />
          </div>

          {/* Business Deductions */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={expensesId} className={styles.fieldLabel}>
                Annual Deductible Business Expenses
              </label>
              <span className={styles.helperBadge}>Schedule C</span>
            </div>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>$</span>
              <input
                id={expensesId}
                type="number"
                inputMode="numeric"
                min={0}
                max={200000}
                step={1000}
                value={businessExpenses || ""}
                onChange={(e) => setBusinessExpenses(e.target.value === "" ? 0 : Number(e.target.value))}
                className={styles.numInput}
              />
            </div>
            <input
              type="range"
              min={0}
              max={80000}
              step={1000}
              value={businessExpenses}
              onChange={(e) => setBusinessExpenses(Number(e.target.value))}
              aria-label="Annual Business Expenses Slider"
              className={styles.rangeSlider}
            />
          </div>

          {/* Filing Status */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={filingId} className={styles.fieldLabel}>
                Federal Tax Filing Status
              </label>
            </div>
            <select
              id={filingId}
              value={filingStatus}
              onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
              className={styles.selectInput}
            >
              <option value="single">Single ($15,000 standard deduction)</option>
              <option value="married_joint">
                Married Filing Jointly ($30,000 standard deduction)
              </option>
              <option value="head_household">
                Head of Household ($22,500 standard deduction)
              </option>
            </select>
          </div>

          {/* State Tax Rate */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={stateId} className={styles.fieldLabel}>
                State Income Tax Rate
              </label>
              <span className={styles.valPill}>{stateTaxRate}%</span>
            </div>
            <div className={styles.stateSelectGroup}>
              <select
                id={stateId}
                onChange={(e) => setStateTaxRate(Number(e.target.value))}
                value={stateTaxRate}
                className={styles.selectInput}
              >
                {STATE_OPTIONS.map((s) => (
                  <option key={s.code} value={s.rate}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* W-2 Withholding Offset (Optional) */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={w2Id} className={styles.fieldLabel}>
                Existing W-2 Tax Withholdings (Optional)
              </label>
            </div>
            <p className={styles.fieldDesc}>
              Taxes already withheld from another job or spouse&apos;s W-2 paycheck this year.
            </p>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>$</span>
              <input
                id={w2Id}
                type="number"
                inputMode="numeric"
                min={0}
                max={100000}
                step={500}
                value={w2Withholding || ""}
                onChange={(e) => setW2Withholding(e.target.value === "" ? 0 : Number(e.target.value))}
                className={styles.numInput}
              />
            </div>
          </div>
        </section>

        {/* Right Results Column */}
        <section className={styles.resultsColumn} aria-live="polite">
          <div className={styles.resultsCard}>
            <div className={styles.cardHeader}>
              <span className={styles.eyebrow}>ESTIMATED QUARTERLY PAYMENT</span>
              <h2 className={styles.mainPaymentAmount}>
                ${Math.round(quarterlyEstimatedPayment).toLocaleString()}
                <span className={styles.mainPaymentSuffix}>/ quarter</span>
              </h2>
              <div className={styles.annualTotalNote}>
                Total Annual Liability:{" "}
                <strong>${Math.round(totalAnnualTaxLiability).toLocaleString()}</strong> (Effective:{" "}
                {effectiveTaxRate.toFixed(1)}% of net profit)
              </div>
            </div>

            {/* Invoicing Rule of Thumb */}
            <div className={styles.ruleOfThumbBox}>
              <span className={styles.ruleLabel}>Rule of Thumb:</span>
              <span className={styles.ruleText}>
                Set aside <strong>{invoiceTaxReservePct}%</strong> of every client check into a high-yield tax account.
              </span>
            </div>

            {/* Itemized Tax Breakdown */}
            <div className={styles.breakdownTable}>
              <div className={styles.breakdownRow}>
                <div className={styles.itemTitleGroup}>
                  <span className={`${styles.itemDot} ${styles.dotEmerald}`} />
                  <div>
                    <span className={styles.itemTitle}>Self-Employment Tax</span>
                    <span className={styles.itemSubtitle}>FICA (12.4% SS + 2.9% Medicare)</span>
                  </div>
                </div>
                <span className={styles.itemVal}>
                  ${Math.round(totalSelfEmploymentTax).toLocaleString()}
                </span>
              </div>

              <div className={styles.breakdownRow}>
                <div className={styles.itemTitleGroup}>
                  <span className={`${styles.itemDot} ${styles.dotBlue}`} />
                  <div>
                    <span className={styles.itemTitle}>Federal Income Tax</span>
                    <span className={styles.itemSubtitle}>After Standard & 20% QBI deductions</span>
                  </div>
                </div>
                <span className={styles.itemVal}>
                  ${Math.round(federalIncomeTax).toLocaleString()}
                </span>
              </div>

              <div className={styles.breakdownRow}>
                <div className={styles.itemTitleGroup}>
                  <span className={`${styles.itemDot} ${styles.dotAmber}`} />
                  <div>
                    <span className={styles.itemTitle}>State Income Tax</span>
                    <span className={styles.itemSubtitle}>Estimated at {stateTaxRate}%</span>
                  </div>
                </div>
                <span className={styles.itemVal}>
                  ${Math.round(estimatedStateTax).toLocaleString()}
                </span>
              </div>
            </div>

            {/* IRS Quarterly Due Dates Schedule */}
            <div className={styles.scheduleBox}>
              <div className={styles.scheduleTitle}>2025–2026 IRS 1040-ES Due Dates</div>
              <div className={styles.datesGrid}>
                <div className={styles.dateItem}>
                  <span className={styles.quarterBadge}>Q1</span>
                  <span className={styles.dateLabel}>April 15</span>
                  <span className={styles.dateAmt}>
                    ${Math.round(quarterlyEstimatedPayment).toLocaleString()}
                  </span>
                </div>
                <div className={styles.dateItem}>
                  <span className={styles.quarterBadge}>Q2</span>
                  <span className={styles.dateLabel}>June 15</span>
                  <span className={styles.dateAmt}>
                    ${Math.round(quarterlyEstimatedPayment).toLocaleString()}
                  </span>
                </div>
                <div className={styles.dateItem}>
                  <span className={styles.quarterBadge}>Q3</span>
                  <span className={styles.dateLabel}>September 15</span>
                  <span className={styles.dateAmt}>
                    ${Math.round(quarterlyEstimatedPayment).toLocaleString()}
                  </span>
                </div>
                <div className={styles.dateItem}>
                  <span className={styles.quarterBadge}>Q4</span>
                  <span className={styles.dateLabel}>January 15</span>
                  <span className={styles.dateAmt}>
                    ${Math.round(quarterlyEstimatedPayment).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.actionRow}>
              <button type="button" className={styles.copyBtn} onClick={handleCopy}>
                {copied ? "✓ Voucher Summary Copied!" : "📋 Copy Tax Voucher Summary"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
