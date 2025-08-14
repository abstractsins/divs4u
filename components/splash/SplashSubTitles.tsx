import styles from './SplashSubTitles.module.css';

interface Props {
    name: string;
    isPowerOn: boolean;
}

export default function SplashSubTitles({ name, isPowerOn }: Props) {
    const lines = [
        '> Full Stack Developer',
        '> Solutions Engineer',
        '> Build, Deploy, Debug',
    ];

    const LETTER_DELAY = 180;
    const BOOT_PHASE_MS = 3600;
    const LINES_START = (name.length - 1) * LETTER_DELAY + BOOT_PHASE_MS + 400;
    const LINE_STAGGER = 280;

    return (
        <div className={styles['sub-container']}>
            {lines.map((text, i) => (
                <div
                    key={i}
                    className={`font-title ${styles['sub']} ${!isPowerOn ? styles['subOff'] : ''}`}
                    style={{ ['--ld' as string]: `${LINES_START + i * LINE_STAGGER}ms` }}
                >
                    {text}
                </div>
            ))}
        </div>
    );
}
