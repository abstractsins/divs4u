import styles from './SplashSubTitles.module.css';

interface Props {
    name: string;
}

export default function SplashSubTitles({ name }: Props) {

    const lines = [
        '> Full Stack Developer',
        '> Solutions Engineer',
        '> Build, Deploy, Debug',
    ];

    const LETTER_DELAY = 180;       // must match BootName.tsx
    const BOOT_PHASE_MS = 3600;     // ~1.6 + .9 + 1.1
    const LINES_START = (name.length - 1) * LETTER_DELAY + BOOT_PHASE_MS + 400; // ≈6.4s
    const LINE_STAGGER = 280;       // delay between each line’s boot


    return (
        <div className={styles['sub-container']}>
            {
                lines.map((text, i) => (
                    <div
                        key={i}
                        className={`font-title ${styles['sub']}`}
                        style={{ ['--ld' as string]: `${LINES_START + i * LINE_STAGGER}ms` }}
                    >
                        {text}
                    </div>
                ))
            }
        </div>
    )
}