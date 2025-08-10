import styles from '../MainContent.module.css'

export default function Contact() {

    return (
        <section id="contact" className={styles["contact-container"]}>
            <h2 className={`font-sans text-3xl ${styles['section-title']}`}>Contact</h2>
            <div className={styles['contact-body']}></div>
        </section>
    );
}