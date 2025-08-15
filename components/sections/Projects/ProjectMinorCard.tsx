import styles from './ProjectMinorCard.module.css';

interface Props {
    id: string;
    title: string;
    subtitle: string;
    className: string;
}

export default function ProjectMinorCard({ id, title, subtitle, className }: Props) {

    return (
        <div id={id} className={`${styles['project-card-wrapper']} ${className}`}>
            <div className={styles['titles']}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
        </div>
    );
}