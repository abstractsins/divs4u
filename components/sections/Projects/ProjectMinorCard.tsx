import Image from 'next/image';
import styles from './ProjectMinorCard.module.css';
import ProjectCardLink from './ProjectCardLink';
import { StaticImageData } from 'next/image';

export type ProjectLinkType = 'video' | 'live' | 'repo' | 'preview';

interface Props {
    id: string;
    title: string;
    subtitle: string;
    className: string;
    image: StaticImageData;
    imgWidth?: number;
    imgHeight?: number;
    alt: string;
    linkType: ProjectLinkType;
    link: string;
    linkType2?: ProjectLinkType;
    link2?: string;
}

export default function ProjectMinorCard({
    id,
    className,

    title,
    subtitle,
 
    image,
    imgHeight,
    imgWidth,
    alt,

    link,
    linkType,

    link2,
    linkType2
}: Props) {

    return (
        <div id={id} className={`${styles['project-card-wrapper']} ${className}`}>
            <div className={styles['left-half']}>
                <Image src={image} alt={alt} height={imgHeight} width={imgWidth} />
            </div>
            <div className={styles['right-half']}>
                <div className={styles['titles']}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
                <div className={styles['link']}>
                    <ProjectCardLink linkType={linkType} link={link} />
                    {link2 && linkType2 &&
                        <ProjectCardLink linkType={linkType2} link={link2} />
                    }
                </div>
            </div>
        </div>
    );
}