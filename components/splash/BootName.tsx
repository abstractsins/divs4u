// BootName.tsx
"use client";

import styles from "./BootName.module.css";

const NAME = "> Daniel Berlin";
const MOBILE_LINE_ONE = ">\u00A0Daniel";
const MOBILE_LINE_TWO = "Berlin";

export default function BootName({ isPowerOn }: { isPowerOn: boolean }) {
  const LETTER_DELAY = 180; // must match your per-letter stagger
  const BOOT_PHASE_MS = 3600; // ~1.6 + .9 + 1.1 from keyframes
  const totalMs = (NAME.length - 1) * LETTER_DELAY + BOOT_PHASE_MS + 200; // small padding

  const renderChars = (text: string, startIndex = 0) =>
    text.split("").map((ch, i) => (
      <span
        key={`${startIndex}-${i}-${ch}`}
        className={styles["boot-letter"]}
        style={{ ["--d" as string]: `${(startIndex + i) * LETTER_DELAY}ms` }}
      >
        {ch}
      </span>
    ));

  return (
    <div
      className={`${styles["boot-wrap"]} ${!isPowerOn ? styles["off"] : ""}`}
      style={{ ["--cursor-delay" as string]: `${totalMs}ms` }}
    >
      <h1 className={`font-title ${styles["boot-line"]}`}>
        <span className={styles["name-first-line"]}>
          {renderChars(MOBILE_LINE_ONE, 0)}
        </span>
        <span className={styles["name-separator"]} aria-hidden="true">
          {" "}
        </span>
        <span className={styles["name-second-line"]}>
          {renderChars(MOBILE_LINE_TWO, MOBILE_LINE_ONE.length + 1)}
          {/* keep cursor mounted so it can animate out on power-off */}
          <span className={styles["boot-cursor"]} aria-hidden="true">
            _
          </span>
        </span>
      </h1>
    </div>
  );
}
