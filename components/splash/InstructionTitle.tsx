import styles from './SplashSubTitles.module.css';

import { useEffect, useState } from "react";

export default function InstructionTitle() {

    const [isReady, setReady] = useState(false);

    useEffect(() => { setTimeout(() => setReady(true), 9000) }, []);

    return (
        <div className={styles['instruction-wrapper']}>
            {isReady &&
                <span className={`font-title ${styles['sub']} ${styles['command']}`}>Press ENTER to Continue</span>
            }
        </div>
    );
}