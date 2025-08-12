'use client';

import styles from './PowerToggle.module.css';

import { useState } from 'react';

interface Props {
    handleToggle: () => void;
    checked: boolean;
}

export default function PowerToggle({ checked, handleToggle }: Props) {


    return (
        <div className={styles["switch-container"]}>
            <label className={styles["switch"]}>
                <input type="checkbox" checked={checked} onChange={handleToggle} />
                <div className={styles["button"]}>
                    <div className={styles["light"]}></div>
                    <div className={styles["dots"]}></div>
                    <div className={styles["characters"]}></div>
                    <div className={styles["shine"]}></div>
                    <div className={styles["shadow"]}></div>
                </div>
            </label>
        </div>
    );
}