import React from "react";
import styles from "./AdSlot.module.css";

interface AdSlotProps {
  slotId?: string;
  adFormat?: "auto" | "rectangle" | "horizontal";
  className?: string;
}

export default function AdSlot({
  slotId = "default-slot",
  adFormat = "horizontal",
  className = "",
}: AdSlotProps) {
  return (
    <aside
      className={`${styles.adContainer} ${styles[adFormat]} ${className}`}
      aria-label="Advertisement"
    >
      <div className={styles.adLabel}>Advertisement</div>
      <div className={styles.adBox}>
        {/* Placeholder for Google AdSense <ins className="adsbygoogle" ... /> */}
        <div className={styles.adPlaceholder}>
          <span className={styles.adText}>Ad Placement Slot</span>
          <span className={styles.adSubtext}>ID: {slotId} • Responsive Unit</span>
        </div>
      </div>
    </aside>
  );
}
