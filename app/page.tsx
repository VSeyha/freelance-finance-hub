import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import styles from "./page.module.css";

export default function HomePage() {
  const tools = [
    {
      title: "Hourly Rate Calculator",
      description:
        "Reverse engineer your freelance pricing from required take-home pay, overhead, taxes, and real billable capacity.",
      href: "/hourly-rate-calculator",
      icon: "⏱️",
      featured: true,
      badge: "Most Popular",
    },
    {
      title: "Quarterly Tax Estimator",
      description:
        "Calculate your 15.3% self-employment tax burden and estimated quarterly IRS tax vouchers in seconds.",
      href: "/estimated-tax-calculator",
      icon: "📑",
      featured: false,
    },
    {
      title: "Project Pricing Calculator",
      description:
        "Price client deliverables with flat fees, milestone buffers, software expenses, and profit contingency margins.",
      href: "/project-pricing-calculator",
      icon: "💼",
      featured: false,
    },
    {
      title: "Invoice Late Fee Calculator",
      description:
        "Determine legal overdue interest and statutory late payment fees on past-due client invoices.",
      href: "/late-fee-calculator",
      icon: "⏳",
      featured: false,
    },
  ];

  return (
    <div className={styles.homeContainer}>
      <div className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBadge}>
            <span>Independent Financial Intelligence</span>
          </div>
          <h1 className={styles.heroTitle}>
            Precision Financial Calculators for{" "}
            <span className={styles.heroTitleAccent}>Independent Pros</span>
          </h1>
          <p className={styles.heroLead}>
            Stop guessing your rates or underestimating self-employment taxes. SoloFinance provides
            transparent, reverse-engineered financial models built specifically for modern freelancers,
            consultants, and contractors.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/hourly-rate-calculator" className={styles.primaryCta}>
              Launch Rate Calculator →
            </Link>
            <Link href="/about" className={styles.secondaryCta}>
              Read Our Methodology
            </Link>
          </div>
        </section>

        {/* Featured Tools Grid */}
        <section className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Financial Tool Suite</h2>
            <p className={styles.sectionDesc}>
              Battle-tested formulas designed to protect your cash flow and ensure healthy profit margins.
            </p>
          </div>

          <div className={styles.toolsGrid}>
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`${styles.toolCard} ${t.featured ? styles.featuredCard : ""}`}
              >
                {t.badge && <span className={styles.cardBadge}>{t.badge}</span>}
                <div className={styles.cardIcon}>{t.icon}</div>
                <h3 className={styles.cardTitle}>{t.title}</h3>
                <p className={styles.cardText}>{t.description}</p>
                <span className={styles.cardAction}>
                  Open Calculator <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Mid-Page Ad Placement */}
        <AdSlot slotId="home-mid-banner" adFormat="horizontal" />

        {/* Why SoloFinance Section */}
        <section className={styles.whySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Engineered for Solo Businesses</h2>
            <p className={styles.sectionDesc}>
              Why traditional corporate calculators leave freelancers short on cash.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>🛡️</div>
              <h3 className={styles.pillarTitle}>Tax Buffer Integration</h3>
              <p className={styles.pillarDesc}>
                We automatically calculate the dual FICA self-employment burden (15.3%) plus federal/state brackets so you are never caught unprepared in April.
              </p>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>📊</div>
              <h3 className={styles.pillarTitle}>Real Capacity Math</h3>
              <p className={styles.pillarDesc}>
                We factor in 20–28 billable hours per week, acknowledging that administrative overhead, client acquisition, and accounting take up 35% of your workweek.
              </p>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>🚀</div>
              <h3 className={styles.pillarTitle}>Contingency & Profit Margins</h3>
              <p className={styles.pillarDesc}>
                Freelancing carries business risk. Our models include built-in contingency buffers to fund sick leave, unpaid gaps, and business reinvestment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
