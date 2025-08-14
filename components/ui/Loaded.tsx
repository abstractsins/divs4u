import { toTitleCase } from "@/utils/utils";

import styles from './Loader.module.css';

interface Props { msg: string }

export default function Loaded({ msg }: Props) {
    
    return (
        <div className={styles["loader"]}>
            <span className={styles["load-text"]}>
                {toTitleCase(msg)}
            </span>
        </div>
    )
}