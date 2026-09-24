"use client";

import React, { useState, useId } from "react";
import styles from "./HourlyRateCalculator.module.css";

interface Preset {
  label: string;
  takeHome: number;
  expenses: number;
  taxRate: number;
  weeksOff: number;
  billableHoursPerWeek: number;
}

const PRESETS: Record<string, Preset> = {
  starter: {
    label: "Starting Freelancer",
    takeHome: 50000,
    expenses: 6000,
    taxRate: 25,
    weeksOff: 3,
    billableHoursPerWeek: 30,
  },
  established: {
    label: "Established Pro",
    takeHome: 85000,
    expenses: 14000,
    taxRate: 28,
    weeksOff: 4,
    billableHoursPerWeek: 25,
  },
  consultant: {
    label: "Senior Consultant",
    takeHome: 135000,
    expenses: 24000,
    taxRate: 32,
    weeksOff: 6,
    billableHoursPerWeek: 20,
  },
};

const CURRENCIES = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "CAD", symbol: "CA$" },
  { code: "AUD", symbol: "AU$" },
];

export default function HourlyRateCalculator() {
  const [currency, setCurrency] = useState("$");
  const [takeHome, setTakeHome] = useState<number>(85000);
  const [expenses, setExpenses] = useState<number>(14000);
  const [taxRate, setTaxRate] = useState<number>(28);
  const [weeksOff, setWeeksOff] = useState<number>(4);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState<number>(25);
  const [profitBuffer, setProfitBuffer] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  const takeHomeId = useId();
  const expensesId = useId();
  const taxRateId = useId();
  const weeksOffId = useId();
  const billableHoursId = useId();
  const profitBufferId = useId();

  // Calculation logic as defined in blueprint
  // 1. Gross Needed = (Take Home / (1 - Tax Rate)) + Expenses
  const decimalTaxRate = Math.min(Math.max(taxRate, 0), 90) / 100;
  const taxablePortion = takeHome > 0 ? takeHome / (1 - decimalTaxRate) : 0;
  const estimatedTaxAmount = taxablePortion - takeHome;
  const grossNeeded = taxablePortion + expenses;

  // 2. Annual Hours = (52 - Weeks Off) * Billable Hrs/Wk
  const workingWeeks = Math.max(52 - weeksOff, 1);
  const annualBillableHours = Math.max(workingWeeks * billableHoursPerWeek, 1);

  // 3. Baseline Rate = Gross Needed / Annual Hours
  const baseHourlyRate = grossNeeded / annualBillableHours;

  // 4. Recommended Rate with profit buffer
  const bufferMultiplier = 1 + profitBuffer / 100;
  const recommendedHourlyRate = baseHourlyRate * bufferMultiplier;
  const recommendedGross = grossNeeded * bufferMultiplier;

  // Ancillary rates
  const dayRate = recommendedHourlyRate * 8;
  const weeklyTarget = recommendedGross / workingWeeks;
  const monthlyTarget = recommendedGross / 12;

  // Percent allocations for visual chart
  const takeHomePct = (takeHome / grossNeeded) * 100;
  const taxPct = (estimatedTaxAmount / grossNeeded) * 100;
  const expensePct = (expenses / grossNeeded) * 100;

  const applyPreset = (key: keyof typeof PRESETS) => {
    const p = PRESETS[key];
    setTakeHome(p.takeHome);
    setExpenses(p.expenses);
    setTaxRate(p.taxRate);
    setWeeksOff(p.weeksOff);
    setBillableHoursPerWeek(p.billableHoursPerWeek);
  };

  const handleCopySummary = async () => {
    const summary = `--- Freelance Hourly Rate Target ---
Minimum Break-Even Rate: ${currency}${Math.round(baseHourlyRate)}/hr
Recommended Rate (+${profitBuffer}% Buffer): ${currency}${Math.round(recommendedHourlyRate)}/hr
Day Rate (8h): ${currency}${Math.round(dayRate)}/day
Monthly Target: ${currency}${Math.round(monthlyTarget).toLocaleString()}/mo
Annual Gross Target: ${currency}${Math.round(recommendedGross).toLocaleString()}/yr
Billable Hours/Year: ${annualBillableHours} hrs (${billableHoursPerWeek} hrs/wk over ${workingWeeks} wks)
Calculated via SoloFinance Hub (freelance-finance-hub)`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const formatCurrency = (val: number) => {
    return `${currency}${Math.round(val).toLocaleString()}`;
  };

  return (
    <div className={styles.calculatorCard} id="calculator-widget">
      {/* Top Bar with Presets & Currency Selector */}
      <div className={styles.widgetHeader}>
        <div className={styles.presetsGroup}>
          <span className={styles.presetLabel}>Quick Presets:</span>
          <div className={styles.presetButtons}>
            <button
              type="button"
              className={styles.presetBtn}
              onClick={() => applyPreset("starter")}
            >
              🌱 Starter
            </button>
            <button
              type="button"
              className={`${styles.presetBtn} ${styles.presetBtnActive}`}
              onClick={() => applyPreset("established")}
            >
              💼 Established
            </button>
            <button
              type="button"
              className={styles.presetBtn}
              onClick={() => applyPreset("consultant")}
            >
              🚀 Senior Pro
            </button>
          </div>
        </div>

        <div className={styles.currencySelector}>
          <label htmlFor="currency-select" className="visually-hidden">
            Select Currency
          </label>
          <select
            id="currency-select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className={styles.currencySelect}
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.symbol}>
                {c.code} ({c.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.widgetGrid}>
        {/* Left Column: Form Controls & Sliders */}
        <section className={styles.inputsColumn} aria-labelledby="calc-inputs-heading">
          <h2 id="calc-inputs-heading" className="visually-hidden">
            Calculator Input Parameters
          </h2>

          {/* 1. Target Take-Home */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={takeHomeId} className={styles.fieldLabel}>
                Target Annual Take-Home (Net Pay)
              </label>
              <span className={styles.helperBadge}>Personal Income</span>
            </div>
            <p className={styles.fieldDesc}>
              The net cash you want deposited into your personal bank account each year.
            </p>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>{currency}</span>
              <input
                id={takeHomeId}
                type="number"
                inputMode="numeric"
                min={0}
                max={1000000}
                step={1000}
                value={takeHome || ""}
                onChange={(e) => setTakeHome(e.target.value === "" ? 0 : Number(e.target.value))}
                className={styles.numInput}
              />
            </div>
            <input
              type="range"
              min={20000}
              max={250000}
              step={2500}
              value={takeHome}
              onChange={(e) => setTakeHome(Number(e.target.value))}
              aria-label="Target Annual Take-Home Slider"
              className={styles.rangeSlider}
            />
          </div>

          {/* 2. Annual Overhead & Expenses */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={expensesId} className={styles.fieldLabel}>
                Annual Business Expenses & Overhead
              </label>
              <span className={styles.helperBadge}>Operating Cost</span>
            </div>
            <p className={styles.fieldDesc}>
              Software, hardware, subscriptions, insurance, accounting, co-working, and travel.
            </p>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>{currency}</span>
              <input
                id={expensesId}
                type="number"
                inputMode="numeric"
                min={0}
                max={200000}
                step={500}
                value={expenses || ""}
                onChange={(e) => setExpenses(e.target.value === "" ? 0 : Number(e.target.value))}
                className={styles.numInput}
              />
            </div>
            <input
              type="range"
              min={0}
              max={60000}
              step={1000}
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              aria-label="Annual Business Expenses Slider"
              className={styles.rangeSlider}
            />
          </div>

          {/* 3. Tax Buffer Rate (%) */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={taxRateId} className={styles.fieldLabel}>
                Tax Buffer Rate
              </label>
              <span className={styles.valPill}>{taxRate}%</span>
            </div>
            <p className={styles.fieldDesc}>
              Combines self-employment tax (15.3% in US) + income tax brackets. Typically 25%–35%.
            </p>
            <div className={styles.sliderControlRow}>
              <input
                id={taxRateId}
                type="range"
                min={10}
                max={50}
                step={1}
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderTicks}>
                <span>10% (Low)</span>
                <span>28% (Typical US)</span>
                <span>50% (High tax)</span>
              </div>
            </div>
          </div>

          {/* 4. Weeks Off per Year */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={weeksOffId} className={styles.fieldLabel}>
                Unpaid Time Off per Year
              </label>
              <span className={styles.valPill}>{weeksOff} weeks</span>
            </div>
            <p className={styles.fieldDesc}>
              Vacations, national holidays, sickness, and planned personal downtime.
            </p>
            <div className={styles.sliderControlRow}>
              <input
                id={weeksOffId}
                type="range"
                min={0}
                max={16}
                step={1}
                value={weeksOff}
                onChange={(e) => setWeeksOff(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderTicks}>
                <span>0 wks</span>
                <span>4 wks (Standard)</span>
                <span>12 wks</span>
              </div>
            </div>
          </div>

          {/* 5. Billable Hours per Week */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={billableHoursId} className={styles.fieldLabel}>
                Billable Client Hours / Week
              </label>
              <span className={styles.valPill}>{billableHoursPerWeek} hrs</span>
            </div>
            <p className={styles.fieldDesc}>
              Realistic client work time. Non-billable time goes to admin, proposals, and marketing.
            </p>
            <div className={styles.sliderControlRow}>
              <input
                id={billableHoursId}
                type="range"
                min={10}
                max={40}
                step={1}
                value={billableHoursPerWeek}
                onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderTicks}>
                <span>15 hrs (Consulting)</span>
                <span>25 hrs (Realistic)</span>
                <span>40 hrs (Burnout)</span>
              </div>
            </div>
          </div>

          {/* 6. Contingency & Growth Buffer */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={profitBufferId} className={styles.fieldLabel}>
                Contingency & Profit Margin Buffer
              </label>
              <span className={styles.valPill}>+{profitBuffer}%</span>
            </div>
            <p className={styles.fieldDesc}>
              Protects against scope creep, late client payments, unpaid gaps, and business savings.
            </p>
            <div className={styles.sliderControlRow}>
              <input
                id={profitBufferId}
                type="range"
                min={0}
                max={35}
                step={5}
                value={profitBuffer}
                onChange={(e) => setProfitBuffer(Number(e.target.value))}
                className={styles.rangeSlider}
              />
            </div>
          </div>
        </section>

        {/* Right Column: Real-Time Results Card */}
        <section
          className={styles.resultsColumn}
          aria-live="polite"
          aria-atomic="true"
          aria-labelledby="calc-results-heading"
        >
          <div className={styles.resultsCard}>
            <div className={styles.cardHeader}>
              <span className={styles.eyebrow}>REAL-TIME PRICING RECOMMENDATION</span>
              <h2 id="calc-results-heading" className={styles.mainRateTitle}>
                {currency}
                <span className={styles.mainRateNumber}>
                  {Math.round(recommendedHourlyRate)}
                </span>
                <span className={styles.mainRateSuffix}>/ hour</span>
              </h2>
              <div className={styles.bufferTag}>
                Includes {profitBuffer}% contingency & profit buffer
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Baseline (Break-even)</span>
                <span className={styles.metricValue}>
                  {formatCurrency(baseHourlyRate)}/hr
                </span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Day Rate (8h client day)</span>
                <span className={styles.metricValue}>
                  {formatCurrency(dayRate)}/day
                </span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Target Monthly Invoicing</span>
                <span className={styles.metricValue}>
                  {formatCurrency(monthlyTarget)}/mo
                </span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Target Weekly Invoicing</span>
                <span className={styles.metricValue}>
                  {formatCurrency(weeklyTarget)}/wk
                </span>
              </div>
            </div>

            {/* Visual Income Breakdown */}
            <div className={styles.breakdownSection}>
              <div className={styles.breakdownHeader}>
                <span className={styles.breakdownTitle}>Where Your Invoiced Revenue Goes</span>
                <span className={styles.grossTotal}>
                  {formatCurrency(recommendedGross)} Gross/Yr
                </span>
              </div>

              {/* Stacked Progress Bar */}
              <div className={styles.progressBar} role="img" aria-label="Revenue distribution bar">
                <div
                  className={styles.barTakeHome}
                  style={{ width: `${takeHomePct}%` }}
                  title={`Take Home: ${Math.round(takeHomePct)}%`}
                />
                <div
                  className={styles.barTaxes}
                  style={{ width: `${taxPct}%` }}
                  title={`Taxes: ${Math.round(taxPct)}%`}
                />
                <div
                  className={styles.barExpenses}
                  style={{ width: `${expensePct}%` }}
                  title={`Expenses: ${Math.round(expensePct)}%`}
                />
              </div>

              {/* Legend with exact numbers */}
              <div className={styles.legendGrid}>
                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotGreen}`} />
                  <div>
                    <span className={styles.legendName}>Net Take-Home Pay</span>
                    <span className={styles.legendAmount}>{formatCurrency(takeHome)}</span>
                  </div>
                </div>

                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotBlue}`} />
                  <div>
                    <span className={styles.legendName}>Taxes & Deductions</span>
                    <span className={styles.legendAmount}>
                      {formatCurrency(estimatedTaxAmount)}
                    </span>
                  </div>
                </div>

                <div className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${styles.dotAmber}`} />
                  <div>
                    <span className={styles.legendName}>Business Expenses</span>
                    <span className={styles.legendAmount}>{formatCurrency(expenses)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Capacity Analysis */}
            <div className={styles.capacityCard}>
              <div className={styles.capacityRow}>
                <span className={styles.capLabel}>Annual Working Weeks:</span>
                <span className={styles.capVal}>{workingWeeks} weeks ({weeksOff} off)</span>
              </div>
              <div className={styles.capacityRow}>
                <span className={styles.capLabel}>Total Billable Hours:</span>
                <span className={styles.capVal}>{annualBillableHours.toLocaleString()} hrs / yr</span>
              </div>
              <div className={styles.capacityRow}>
                <span className={styles.capLabel}>Weekly Utilization:</span>
                <span className={styles.capVal}>
                  {Math.round((billableHoursPerWeek / 40) * 100)}% (25h client + 15h admin)
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className={styles.actionRow}>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={handleCopySummary}
              >
                {copied ? "✓ Rate Card Copied!" : "📋 Copy Rate Summary"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
