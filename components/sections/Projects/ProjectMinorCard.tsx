import styles from './ProjectMinorCard.module.css';

interface Props {
    id: string;
    title: string;
    subtitle: string;
}

export default function ProjectCard({ id, title, subtitle }: Props) {

    return (
        <div id={id} className={styles['project-card-wrapper']}>
            <div className={styles['titles']}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
        </div>
    );
}