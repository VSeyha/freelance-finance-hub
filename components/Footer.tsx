import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <span className={styles.logoIcon}>⚡</span>
              <span className={styles.brandName}>SoloFinance Hub</span>
            </div>
            <p className={styles.brandTagline}>
              Precision financial engineering tools designed for independent contractors, freelancers, and solo consultants.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Calculators</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/hourly-rate-calculator">Hourly Rate Calculator</Link>
              </li>
              <li>
                <Link href="/estimated-tax-calculator">Quarterly Tax Estimator</Link>
              </li>
              <li>
                <Link href="/project-pricing-calculator">Project Pricing Tool</Link>
              </li>
              <li>
                <Link href="/late-fee-calculator">Invoice Late Fee Calculator</Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Transparency & Legal</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/about">About Us & Methodology</Link>
              </li>
              <li>
                <Link href="/contact">Contact Support</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.disclaimer}>
            <strong>Financial Disclaimer:</strong> SoloFinance tools provide estimates for educational and planning purposes only. They do not constitute formal tax, legal, or accounting advice. Consult a certified CPA or tax professional for your specific jurisdiction.
          </p>
          <div className={styles.copyrightRow}>
            <span>© {currentYear} SoloFinance. Built for independent professionals worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
