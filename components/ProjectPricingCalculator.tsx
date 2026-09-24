"use client";

import React, { useState, useId } from "react";
import styles from "./ProjectPricingCalculator.module.css";

interface ProjectPreset {
  label: string;
  hours: number;
  rate: number;
  expenses: number;
  bufferPct: number;
  profitMarginPct: number;
}

const PRESETS: Record<string, ProjectPreset> = {
  quick: {
    label: "Small Sprint (1-2 Weeks)",
    hours: 25,
    rate: 95,
    expenses: 150,
    bufferPct: 15,
    profitMarginPct: 20,
  },
  standard: {
    label: "Standard Deliverable (3-5 Weeks)",
    hours: 60,
    rate: 110,
    expenses: 450,
    bufferPct: 20,
    profitMarginPct: 25,
  },
  enterprise: {
    label: "Complex System / Enterprise",
    hours: 140,
    rate: 140,
    expenses: 1500,
    bufferPct: 25,
    profitMarginPct: 30,
  },
};

export default function ProjectPricingCalculator() {
  const [hours, setHours] = useState<number>(60);
  const [rate, setRate] = useState<number>(110);
  const [expenses, setExpenses] = useState<number>(450);
  const [bufferPct, setBufferPct] = useState<number>(20);
  const [profitMarginPct, setProfitMarginPct] = useState<number>(25);
  const [copied, setCopied] = useState<boolean>(false);

  const hoursId = useId();
  const rateId = useId();
  const expensesId = useId();
  const bufferId = useId();
  const profitMarginId = useId();

  // Core Math Formula per blueprint:
  // Base Labor Cost
  const baseLabor = hours * rate;
  // Subtotal with pass-through costs
  const subtotalCost = baseLabor + expenses;
  // Revision / Scope buffer
  const bufferMultiplier = 1 + bufferPct / 100;
  const bufferAmount = subtotalCost * (bufferPct / 100);
  const riskAdjustedBase = subtotalCost * bufferMultiplier;

  // Profit Margin & Value Markup
  const profitMarginMultiplier = 1 + profitMarginPct / 100;
  const profitAmount = riskAdjustedBase * (profitMarginPct / 100);
  const recommendedFixedFee = riskAdjustedBase * profitMarginMultiplier;

  // Floor Price (Break-even with scope buffer, zero extra profit)
  const minimumFloorFee = riskAdjustedBase;

  // Effective hourly yields
  const effectiveRateFast = hours > 0 ? (recommendedFixedFee - expenses) / hours : 0;
  const totalHoursWithBuffer = hours * bufferMultiplier;
  const effectiveRateMaxRevisions = (recommendedFixedFee - expenses) / totalHoursWithBuffer;

  // Milestone Milestones (Standard 50% deposit / 25% midpoint / 25% completion)
  const depositUpfront = recommendedFixedFee * 0.5;
  const milestoneMid = recommendedFixedFee * 0.25;
  const milestoneFinal = recommendedFixedFee * 0.25;

  const applyPreset = (key: keyof typeof PRESETS) => {
    const p = PRESETS[key];
    setHours(p.hours);
    setRate(p.rate);
    setExpenses(p.expenses);
    setBufferPct(p.bufferPct);
    setProfitMarginPct(p.profitMarginPct);
  };

  const handleCopy = async () => {
    const text = `--- SoloFinance Project Pricing Proposal Summary ---
Recommended Fixed Project Fee: $${Math.round(recommendedFixedFee).toLocaleString()}
Minimum Walk-Away Floor: $${Math.round(minimumFloorFee).toLocaleString()}

Scope Parameters:
- Estimated Production Hours: ${hours} hrs @ $${rate}/hr base ($${Math.round(baseLabor).toLocaleString()})
- Third-Party Assets / Expenses: $${Math.round(expenses).toLocaleString()}
- Revision & Scope Creep Buffer: ${bufferPct}% ($${Math.round(bufferAmount).toLocaleString()})
- Value Profit Margin: ${profitMarginPct}% ($${Math.round(profitAmount).toLocaleString()})

Payment Milestone Structure:
- 50% Upfront Kickoff Deposit: $${Math.round(depositUpfront).toLocaleString()}
- 25% Interim Milestone Approval: $${Math.round(milestoneMid).toLocaleString()}
- 25% Final Delivery & Sign-off: $${Math.round(milestoneFinal).toLocaleString()}

Effective Rate: $${Math.round(effectiveRateFast)}/hr (on schedule) to $${Math.round(effectiveRateMaxRevisions)}/hr (max revisions)
Generated via SoloFinance Hub (freelance-finance-hub)`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {}
  };

  return (
    <div className={styles.calculatorCard} id="project-pricing-widget">
      <div className={styles.widgetHeader}>
        <div className={styles.presetsGroup}>
          <span className={styles.presetLabel}>Deliverable Presets:</span>
          <div className={styles.presetButtons}>
            <button type="button" className={styles.presetBtn} onClick={() => applyPreset("quick")}>
              ⚡ Sprint
            </button>
            <button
              type="button"
              className={`${styles.presetBtn} ${styles.presetBtnActive}`}
              onClick={() => applyPreset("standard")}
            >
              📦 Standard
            </button>
            <button type="button" className={styles.presetBtn} onClick={() => applyPreset("enterprise")}>
              🏢 Enterprise
            </button>
          </div>
        </div>
        <span className={styles.formulaTag}>Formula: [(Hours × Rate) + Costs] × Buffer × Margin</span>
      </div>

      <div className={styles.widgetGrid}>
        {/* Left Inputs */}
        <section className={styles.inputsColumn}>
          {/* Estimated Hours */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={hoursId} className={styles.fieldLabel}>
                Estimated Production Hours
              </label>
              <span className={styles.valPill}>{hours} hrs</span>
            </div>
            <p className={styles.fieldDesc}>
              Realistic active working hours required to create the core deliverable.
            </p>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>⏱️</span>
              <input
                id={hoursId}
                type="number"
                min={1}
                max={500}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value) || 0)}
                className={styles.numInput}
              />
            </div>
            <input
              type="range"
              min={5}
              max={160}
              step={5}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              aria-label="Estimated Production Hours Slider"
              className={styles.rangeSlider}
            />
          </div>

          {/* Target Hourly Rate */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={rateId} className={styles.fieldLabel}>
                Internal Baseline Hourly Rate
              </label>
              <span className={styles.helperBadge}>Rate Floor</span>
            </div>
            <p className={styles.fieldDesc}>
              Your target rate from the Hourly Rate Calculator (your internal cost of labor).
            </p>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>$</span>
              <input
                id={rateId}
                type="number"
                min={20}
                max={500}
                step={5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value) || 0)}
                className={styles.numInput}
              />
            </div>
            <input
              type="range"
              min={30}
              max={250}
              step={5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              aria-label="Target Hourly Rate Slider"
              className={styles.rangeSlider}
            />
          </div>

          {/* Project Expenses */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={expensesId} className={styles.fieldLabel}>
                Direct Project Expenses & Assets
              </label>
              <span className={styles.helperBadge}>Pass-through</span>
            </div>
            <p className={styles.fieldDesc}>
              Fonts, stock footage, hosting, API credits, plugin licenses, or subcontractors.
            </p>
            <div className={styles.inputWithAddon}>
              <span className={styles.addon}>$</span>
              <input
                id={expensesId}
                type="number"
                min={0}
                max={25000}
                step={50}
                value={expenses}
                onChange={(e) => setExpenses(Number(e.target.value) || 0)}
                className={styles.numInput}
              />
            </div>
          </div>

          {/* Revision & Scope Buffer (%) */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={bufferId} className={styles.fieldLabel}>
                Revision & Scope Creep Buffer
              </label>
              <span className={styles.valPill}>+{bufferPct}%</span>
            </div>
            <p className={styles.fieldDesc}>
              Shields against endless tweak rounds, unexpected feedback delays, and scope expansion.
            </p>
            <div className={styles.sliderControlRow}>
              <input
                id={bufferId}
                type="range"
                min={5}
                max={40}
                step={5}
                value={bufferPct}
                onChange={(e) => setBufferPct(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderTicks}>
                <span>10% (Tight Scope)</span>
                <span>20% (Standard)</span>
                <span>35% (Vague Client)</span>
              </div>
            </div>
          </div>

          {/* Value Profit Margin */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor={profitMarginId} className={styles.fieldLabel}>
                Value Premium & Profit Margin
              </label>
              <span className={styles.valPill}>+{profitMarginPct}%</span>
            </div>
            <p className={styles.fieldDesc}>
              The premium earned for taking fixed-fee project risk and delivering high client ROI.
            </p>
            <div className={styles.sliderControlRow}>
              <input
                id={profitMarginId}
                type="range"
                min={0}
                max={50}
                step={5}
                value={profitMarginPct}
                onChange={(e) => setProfitMarginPct(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderTicks}>
                <span>10% (Cost Plus)</span>
                <span>25% (Healthy Profit)</span>
                <span>50% (High Value)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Results Column */}
        <section className={styles.resultsColumn} aria-live="polite">
          <div className={styles.resultsCard}>
            <div className={styles.cardHeader}>
              <span className={styles.eyebrow}>RECOMMENDED FLAT FEE QUOTE</span>
              <h2 className={styles.mainPriceAmount}>
                ${Math.round(recommendedFixedFee).toLocaleString()}
              </h2>
              <div className={styles.floorNote}>
                Minimum Break-even Floor: <strong>${Math.round(minimumFloorFee).toLocaleString()}</strong>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Base Labor Cost</span>
                <span className={styles.metricValue}>${Math.round(baseLabor).toLocaleString()}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Scope Buffer Amount</span>
                <span className={styles.metricValue}>+${Math.round(bufferAmount).toLocaleString()}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Value Profit Margin</span>
                <span className={styles.metricValue}>+${Math.round(profitAmount).toLocaleString()}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Effective Hourly Yield</span>
                <span className={styles.metricValue}>
                  ${Math.round(effectiveRateFast)}/hr
                </span>
              </div>
            </div>

            {/* Milestone Payment Recommendation */}
            <div className={styles.milestoneSection}>
              <div className={styles.milestoneHeader}>Recommended 50 / 25 / 25 Payment Terms</div>
              <div className={styles.milestonesList}>
                <div className={styles.milestoneRow}>
                  <div className={styles.milestoneInfo}>
                    <span className={styles.milestoneBadge}>50%</span>
                    <span className={styles.milestoneName}>Upfront Kickoff Deposit</span>
                  </div>
                  <span className={styles.milestoneAmt}>
                    ${Math.round(depositUpfront).toLocaleString()}
                  </span>
                </div>
                <div className={styles.milestoneRow}>
                  <div className={styles.milestoneInfo}>
                    <span className={styles.milestoneBadge}>25%</span>
                    <span className={styles.milestoneName}>First Milestone Approval</span>
                  </div>
                  <span className={styles.milestoneAmt}>
                    ${Math.round(milestoneMid).toLocaleString()}
                  </span>
                </div>
                <div className={styles.milestoneRow}>
                  <div className={styles.milestoneInfo}>
                    <span className={styles.milestoneBadge}>25%</span>
                    <span className={styles.milestoneName}>Final Release & Assets</span>
                  </div>
                  <span className={styles.milestoneAmt}>
                    ${Math.round(milestoneFinal).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.actionRow}>
              <button type="button" className={styles.copyBtn} onClick={handleCopy}>
                {copied ? "✓ Proposal Quote Copied!" : "📋 Copy Proposal Pricing Terms"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
