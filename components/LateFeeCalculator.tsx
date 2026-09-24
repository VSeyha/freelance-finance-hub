"use client";

import React, { useState, useId } from "react";
import styles from "./LateFeeCalculator.module.css";

const STANDARD_RATES = [
  { label: "1.5% Monthly (18% Annual - Standard Commercial)", annualRate: 18 },
  { label: "1.0% Monthly (12% Annual - Moderate Commercial)", annualRate: 12 },
  { label: "UK / EU Late Payment Statutory (8% + Base Rate ~13%)", annualRate: 13 },
  { label: "US Federal Judgment Statutory (~5%)", annualRate: 5 },
];

export default function LateFeeCalculator() {
  const [invoiceAmount, setInvoiceAmount] = useState<number>(4500);
  const [daysPastDue, setDaysPastDue] = useState<number>(45);
  const [annualRate, setAnnualRate] = useState<number>(18);
  const [flatLateFee, setFlatLateFee] = useState<number>(50);
  const [clientName, setClientName] = useState<string>("Acme Corp");
  const [invoiceNumber, setInvoiceNumber] = useState<string>("INV-1042");
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedLetter, setCopiedLetter] = useState<boolean>(false);

  const amountId = useId();
  const daysId = useId();
  const rateId = useId();
  const flatFeeId = useId();
  const clientId = useId();
  const invNumberId = useId();

  // Core Math Calculation per blueprint:
  // Interest = Amount * (Annual Rate / 365) * Days Past Due
  const dailyRate = annualRate / 100 / 365;
  const accruedInterest = invoiceAmount * dailyRate * daysPastDue;
  const totalLateCharges = accruedInterest + flatLateFee;
  const totalAmountDue = invoiceAmount + totalLateCharges;

  // Demand Letter Template
  const demandNotice = `Subject: Overdue Notice: Invoice #${invoiceNumber} - Statement of Late Fees

Dear ${clientName || "Accounts Payable Team"},

This notice regards Invoice #${invoiceNumber} in the amount of $${invoiceAmount.toLocaleString()}, which was originally due ${daysPastDue} days ago.

As outlined in our agreed contract payment terms, overdue balances are subject to an annual late interest charge of ${annualRate}% (${(annualRate / 12).toFixed(1)}% monthly), plus a standard administrative late fee.

ACCOUNT SUMMARY AS OF TODAY:
- Original Principal Invoice: $${invoiceAmount.toLocaleString()}
- Days Past Due: ${daysPastDue} days
- Accrued Interest (${annualRate}% p.a.): $${accruedInterest.toFixed(2)}
- Administrative Late Fee: $${flatLateFee.toFixed(2)}
--------------------------------------------------
TOTAL OUTSTANDING BALANCE DUE: $${totalAmountDue.toFixed(2)}

Please remit payment of $${totalAmountDue.toFixed(2)} immediately via your usual payment method to prevent further daily interest accumulation and escalation.

If this payment was already transmitted today, please provide the transaction confirmation number so we can update your account ledger.

Sincerely,
Accounts Receivable`;

  const handleCopySummary = async () => {
    const text = `--- SoloFinance Late Fee Assessment ---
Invoice #${invoiceNumber} for ${clientName}
Original Balance: $${invoiceAmount.toLocaleString()}
Days Overdue: ${daysPastDue} days
Annual Interest Rate: ${annualRate}% ($${((invoiceAmount * annualRate) / 100 / 365).toFixed(2)}/day)
Accrued Statutory Interest: $${accruedInterest.toFixed(2)}
Fixed Late Penalty: $${flatLateFee.toFixed(2)}
Total Amount Now Due: $${totalAmountDue.toFixed(2)}
Calculated via SoloFinance Hub (freelance-finance-hub)`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {}
  };

  const handleCopyLetter = async () => {
    try {
      await navigator.clipboard.writeText(demandNotice);
      setCopiedLetter(true);
      setTimeout(() => setCopiedLetter(false), 2400);
    } catch {}
  };

  return (
    <div className={styles.calculatorCard} id="late-fee-widget">
      <div className={styles.widgetHeader}>
        <div className={styles.headerTitleGroup}>
          <span className={styles.overdueBadge}>STATUTORY LATE PAYMENT FORMULA</span>
          <span className={styles.interestFormula}>Interest = Amount × (Rate ÷ 365) × Days</span>
        </div>
      </div>

      <div className={styles.widgetGrid}>
        {/* Left Inputs */}
        <section className={styles.inputsColumn}>
          {/* Invoice Amount */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={amountId} className={styles.fieldLabel}>
                Original Invoice Principal
              </label>
              <span className={styles.helperBadge}>Unpaid Balance</span>
            </div>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>$</span>
              <input
                id={amountId}
                type="number"
                min={1}
                max={500000}
                step={100}
                value={invoiceAmount || ""}
                onChange={(e) => setInvoiceAmount(e.target.value === "" ? 0 : Number(e.target.value))}
                className={styles.numInput}
              />
            </div>
            <input
              type="range"
              min={500}
              max={30000}
              step={250}
              value={invoiceAmount}
              onChange={(e) => setInvoiceAmount(Number(e.target.value))}
              aria-label="Original Invoice Principal Slider"
              className={styles.rangeSlider}
            />
          </div>

          {/* Days Overdue */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={daysId} className={styles.fieldLabel}>
                Days Past Due Date
              </label>
              <span className={styles.valPill}>{daysPastDue} days late</span>
            </div>
            <p className={styles.fieldDesc}>
              Calendar days elapsed since the original payment deadline (Net 15 / Net 30).
            </p>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>📅</span>
              <input
                id={daysId}
                type="number"
                min={1}
                max={365}
                value={daysPastDue || ""}
                onChange={(e) => setDaysPastDue(e.target.value === "" ? 0 : Number(e.target.value))}
                className={styles.numInput}
              />
            </div>
            <input
              type="range"
              min={1}
              max={120}
              step={1}
              value={daysPastDue}
              onChange={(e) => setDaysPastDue(Number(e.target.value))}
              aria-label="Days Past Due Slider"
              className={styles.rangeSlider}
            />
          </div>

          {/* Annual Interest Rate (%) */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={rateId} className={styles.fieldLabel}>
                Annual Late Interest Rate (APR)
              </label>
              <span className={styles.valPill}>{annualRate}% / yr</span>
            </div>
            <p className={styles.fieldDesc}>
              1.5% per month (18% per year) is standard in most B2B vendor contracts.
            </p>
            <div className={styles.sliderControlRow}>
              <input
                id={rateId}
                type="range"
                min={3}
                max={24}
                step={0.5}
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderTicks}>
                <span>5% (Statutory)</span>
                <span>12% (1%/mo)</span>
                <span>18% (1.5%/mo Standard)</span>
                <span>24%</span>
              </div>
            </div>
          </div>

          {/* Flat Administrative Fee */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={flatFeeId} className={styles.fieldLabel}>
                One-Time Administrative Penalty (Optional)
              </label>
              <span className={styles.helperBadge}>Late Penalty</span>
            </div>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>$</span>
              <input
                id={flatFeeId}
                type="number"
                min={0}
                max={500}
                step={10}
                value={flatLateFee === 0 ? "" : flatLateFee}
                onChange={(e) => setFlatLateFee(e.target.value === "" ? 0 : Number(e.target.value))}
                className={styles.numInput}
              />
            </div>
          </div>

          {/* Client & Invoice Identifiers */}
          <div className={styles.invoiceMetaGrid}>
            <div>
              <label htmlFor={invNumberId} className={styles.metaLabel}>Invoice #</label>
              <input
                id={invNumberId}
                type="text"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className={styles.textInput}
              />
            </div>
            <div>
              <label htmlFor={clientId} className={styles.metaLabel}>Client Company</label>
              <input
                id={clientId}
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={styles.textInput}
              />
            </div>
          </div>
        </section>

        {/* Right Results Column */}
        <section className={styles.resultsColumn} aria-live="polite">
          <div className={styles.resultsCard}>
            <div className={styles.cardHeader}>
              <span className={styles.eyebrow}>TOTAL OUTSTANDING BALANCE DUE</span>
              <h2 className={styles.mainTotalAmount}>
                ${totalAmountDue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h2>
              <div className={styles.totalChargesNote}>
                Includes <strong>${totalLateCharges.toFixed(2)}</strong> in total late penalties and accrued interest
              </div>
            </div>

            {/* Quick Metrics */}
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Accrued Interest</span>
                <span className={styles.metricValue}>${accruedInterest.toFixed(2)}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Daily Interest Accrual</span>
                <span className={styles.metricValue}>
                  +${((invoiceAmount * annualRate) / 100 / 365).toFixed(2)}/day
                </span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Administrative Penalty</span>
                <span className={styles.metricValue}>${flatLateFee.toFixed(2)}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Original Principal</span>
                <span className={styles.metricValue}>${invoiceAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Pre-written Demand Notice Preview */}
            <div className={styles.demandLetterSection}>
              <div className={styles.demandHeader}>
                <span>Formatted Demand Email Notice</span>
                <button
                  type="button"
                  onClick={handleCopyLetter}
                  className={styles.copySmallBtn}
                >
                  {copiedLetter ? "✓ Copied" : "Copy Email"}
                </button>
              </div>
              <textarea
                readOnly
                value={demandNotice}
                rows={7}
                className={styles.letterTextarea}
              />
            </div>

            <div className={styles.actionRow}>
              <button type="button" className={styles.copyBtn} onClick={handleCopySummary}>
                {copied ? "✓ Ledger Summary Copied!" : "📋 Copy Late Fee Summary"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
