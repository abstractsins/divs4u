import styles from './SplashSubTitles.module.css';

import { useEffect, useState } from "react";

interface Props {
    onActivate: () => void;
}

export default function InstructionTitle({ onActivate }: Props) {

    const [isReady, setReady] = useState(false);

    useEffect(() => { setTimeout(() => setReady(true), 9000) }, []);

    return (
        <div className={styles['instruction-wrapper']}>
            {isReady && (
                <>
                    <span className={`font-title ${styles['sub']} ${styles['command']} ${styles['commandDesktop']}`}>
                        Press ENTER to Continue
                    </span>
                    <button
                        type="button"
                        className={`font-title ${styles['sub']} ${styles['command']} ${styles['commandMobile']} ${styles['commandTrigger']}`}
                        aria-label="Scroll down"
                        onClick={onActivate}
                    >
                        ↓
                    </button>
                </>
            )}
        </div>
    );
}