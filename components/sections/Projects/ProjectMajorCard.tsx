import Image from 'next/image';
import styles from './ProjectMajorCard.module.css';

import { ProjectLinkType } from './ProjectMinorCard';
import ProjectCardLink from './ProjectCardLink';
import ProjectCardLogos from './ProjectCardLogos';


interface Props {
    id: string;
    className: string;

    thumbnailSrc: React.ComponentProps<typeof Image>["src"];
    thumbnailW: number;
    thumbnailH: number;
    alt: string;

    tech: string[];
    status: string;

    link1: string;
    linkType1: ProjectLinkType;

    link2?: string;
    linkType2?: ProjectLinkType;

    title: string;
    subtitle: string;
}

export default function ProjectMajorCard({
    id,
    className,

    thumbnailSrc,
    thumbnailW,
    thumbnailH,
    alt,

    tech,
    status,

    link1,
    linkType1,

    link2,
    linkType2,

    title,
    subtitle
}: Props) {

    return (
        <div id={id} className={`${styles['project-card-wrapper']} ${className}`}>

            <div className={`${styles['left-half']} ${styles['minor']}`}>
                <Image
                    alt={alt}
                    src={thumbnailSrc}
                    width={thumbnailW}
                    height={thumbnailH}
                />
            </div>

            <div className={styles['right-half']}>
                <div className={styles['middle']}>

                    <div className={styles['titles']}>
                        <h2>{title}</h2>
                        <h3>{subtitle}</h3>
                    </div>

                    <div className={styles['logos']}>
                        <span>
                            <ProjectCardLogos logos={tech} />
                        </span>
                    </div>

                </div>
                <div className={styles['links']}>
                    <span className={styles['status']}>{status}</span>
                    <ProjectCardLink linkType={linkType1} link={link1} />
                    {link2 && linkType2 &&
                        <ProjectCardLink linkType={linkType2} link={link2} />
                    }
                </div>
            </div>

        </div>
    );
}