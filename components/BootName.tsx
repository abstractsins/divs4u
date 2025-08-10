// BootName.tsx
'use client';

import styles from './BootName.module.css';

const NAME = '> Daniel Berlin';

export default function BootName() {
    const LETTER_DELAY = 180;     // must match your per-letter stagger
    const BOOT_PHASE_MS = 3600;   // ~1.6 + .9 + 1.1 from keyframes
    const totalMs = (NAME.length - 1) * LETTER_DELAY + BOOT_PHASE_MS + 200; // small padding

    return (
        <div
            className={styles['boot-wrap']}
            style={{ ['--cursor-delay' as string]: `${totalMs}ms` }}
        >
            <h1 className={`font-title ${styles['boot-line']}`}>
                {NAME.split('').map((ch, i) => (
                    <span
                        key={i}
                        className={styles['boot-letter']}
                        style={{ ['--d' as string]: `${i * LETTER_DELAY}ms` }}
                    >
                        {ch === ' ' ? '\u00A0' : ch}
                    </span>
                ))}
                <span className={styles['boot-cursor']} aria-hidden="true">_</span>
            </h1>
        </div>
    );
}
