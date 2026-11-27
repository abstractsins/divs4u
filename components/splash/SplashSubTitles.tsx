import styles from "./SplashSubTitles.module.css";

import { strings, animationControls } from "@/constants";

interface Props {
  name: string;
  isPowerOn: boolean;
}

export default function SplashSubTitles({ name, isPowerOn }: Props) {
  const { headlines: lines } = strings.splash;

  const {
    subtitles: { LETTER_DELAY, BOOT_PHASE_MS, LINES_START_VAR, LINE_STAGGER },
  } = animationControls.hero;
  const LINES_START =
    (name.length - 1) * LETTER_DELAY + BOOT_PHASE_MS + LINES_START_VAR;

  return (
    <div className={styles["sub-container"]}>
      {lines.map((text, i) => (
        <div
          key={i}
          className={`font-title ${styles["sub"]} ${!isPowerOn ? styles["subOff"] : ""}`}
          style={{ ["--ld" as string]: `${LINES_START + i * LINE_STAGGER}ms` }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
