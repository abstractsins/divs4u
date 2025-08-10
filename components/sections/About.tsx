import styles from '../MainContent.module.css'

export default function About() {

    return (
        <section id="about" className={styles["about-container"]}>
            <h2 className={`font-sans text-3xl ${styles['section-title']}`}>About</h2>
            <div className={styles['about-body']}>
                <div className={`image-container ${styles['bio-pic']}`}></div>
                <div className={styles['about-text-container']}></div>
            </div>
        </section>
    );
}