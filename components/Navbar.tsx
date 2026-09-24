"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/hourly-rate-calculator", label: "Hourly Rate" },
  { href: "/estimated-tax-calculator", label: "Quarterly Tax" },
  { href: "/project-pricing-calculator", label: "Project Pricing" },
  { href: "/late-fee-calculator", label: "Late Fees" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logoBadge}>
            <span className={styles.logoIcon}>⚡</span>
          </div>
          <div className={styles.brandTextGroup}>
            <span className={styles.brandName}>SoloFinance</span>
            <span className={styles.brandBadge}>PRO</span>
          </div>
        </Link>

        <nav className={styles.navMenu} aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? styles.navLinkActive : styles.navLink}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link href="/about" className={styles.secondaryBtn}>
            About Hub
          </Link>
        </div>
      </div>
    </header>
  );
}
