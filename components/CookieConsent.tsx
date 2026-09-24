"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const consent = localStorage.getItem("solofinance_cookie_consent");
    if (!consent) {
      // Small timeout to prevent layout shift during initial paint
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("solofinance_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("solofinance_cookie_consent", "essential_only");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className={styles.bannerContainer}
      role="region"
      aria-label="Cookie and Privacy Consent"
    >
      <div className={styles.bannerContent}>
        <div className={styles.textGroup}>
          <span className={styles.cookieIcon}>🍪</span>
          <p className={styles.bannerText}>
            We and our third-party advertising partners (including Google AdSense) use cookies to
            analyze site traffic, personalize content, and serve relevant advertisements. Review our{" "}
            <Link href="/privacy-policy" className={styles.policyLink}>
              Privacy & Cookie Policy
            </Link>{" "}
            for details and opt-out options.
          </p>
        </div>

        <div className={styles.buttonsGroup}>
          <button
            type="button"
            className={styles.declineBtn}
            onClick={handleDecline}
          >
            Essential Only
          </button>
          <button
            type="button"
            className={styles.acceptBtn}
            onClick={handleAccept}
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </aside>
  );
}
