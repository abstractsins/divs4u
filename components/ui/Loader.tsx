import { useState } from "react";
import { toTitleCase } from "@/utils/utils";

import styles from './Loader.module.css';

interface Props { msg: string }

export default function Loader({ msg }: Props) {
    const [loadText, setLoadText] = useState(msg);
    
    setTimeout(() => {
        msg = msg.toLowerCase();
        switch (loadText.toLowerCase()) {
            case msg: setLoadText(msg + '.'); break;
            case msg + '.': setLoadText(msg + '..'); break;
            case msg + '..': setLoadText(msg + '...'); break;
            case msg + '...': setLoadText(msg + '....'); break;
            case msg + '....': setLoadText(msg + '.....'); break;
            case msg + '.....': setLoadText(msg); break;
        }
    }, 250);

    return (
        <div className={styles["loader"]}>
            <span className={styles["load-text"]}>
                {toTitleCase(loadText)}
            </span>
        </div>
    )
}