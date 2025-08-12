import Image from 'next/image';
import styles from './ProjectCard.module.css';

import gainsPic from '@/public/images/gains-thumbnail.webp';

import { Tourney } from 'next/font/google';
import { SiGithub } from "react-icons/si";
import { GiWeightLiftingUp } from "react-icons/gi";

import Link from 'next/link';

const gains = Tourney({
    variable: '--font-gains',
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})

interface Props {
    id: string;
}

export default function ProjectGainsDB({ id }: Props) {

    return (
        <div id={id} className={`${gains.variable} ${styles['project-card-wrapper']}`}>

            <div className={styles['left-half']}>
                <Image
                    alt="picture of weights"
                    src={gainsPic}
                />
            </div>

            <div className={styles['right-half']}>
                <div className={styles['titles']}>
                    <h2 className='font-gains'>GainsDB</h2>
                    <h3>A Next.js Gym Tracking App</h3>
                </div>
                <div className={styles['links']}>
                    <span><Link href='https://www.gainsdb.com' target='new'><GiWeightLiftingUp /> Live Link</Link></span>
                    <span><Link href='https://github.com/abstractsins/GainsDB' target='new'><SiGithub /> Github Repo</Link></span>
                </div>
            </div>

        </div>
    );
}