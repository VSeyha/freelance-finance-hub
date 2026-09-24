"use client";

import React, { useEffect, useRef } from "react";
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
  const adRef = useRef<HTMLModElement | null>(null);
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const isRealAdEnabled = Boolean(adsenseClientId && !adsenseClientId.includes("000000"));

  useEffect(() => {
    if (isRealAdEnabled && typeof window !== "undefined") {
      try {
        // @ts-expect-error - Google AdSense global
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        // Suppress repeated push error in single-page transitions
        console.debug("AdSense push:", err);
      }
    }
  }, [isRealAdEnabled]);

  return (
    <aside
      className={`${styles.adContainer} ${styles[adFormat]} ${className}`}
      aria-label="Advertisement"
    >
      <div className={styles.adLabel}>Advertisement</div>
      <div className={styles.adBox}>
        {isRealAdEnabled ? (
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block", width: "100%" }}
            data-ad-client={adsenseClientId}
            data-ad-slot={slotId}
            data-ad-format={adFormat === "horizontal" ? "horizontal" : "auto"}
            data-full-width-responsive="true"
          />
        ) : (
          <div className={styles.adPlaceholder}>
            <span className={styles.adText}>Ad Placement Slot</span>
            <span className={styles.adSubtext}>ID: {slotId} • 30px+ clearance maintained</span>
          </div>
        )}
      </div>
    </aside>
  );
}
