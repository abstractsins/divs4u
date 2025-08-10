import styles from '../MainContent.module.css'

export default function Projects() {

    return (
        <section id="projects" className={styles["projects-container"]}>
            <h2 className={`font-sans text-3xl ${styles['section-title']}`}>Projects</h2>
            <div className={styles['projects-body']}></div>
        </section>
    );
}