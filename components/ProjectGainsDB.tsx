import Image from 'next/image';
import styles from './ProjectCard.module.css';

import gainsPic from '@/public/images/gains-thumbnail.webp';

import { Tourney } from 'next/font/google';

//* ICONS
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";

import {
    RiNextjsFill,
    RiJavascriptLine,
    RiVercelFill
} from "react-icons/ri";

import {
    SiGithub,
    SiExpress,
    SiPrisma,
    SiHtml5,
    SiCss3,
    SiRailway
} from "react-icons/si";

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
                <div className={styles['middle']}>

                    <div className={styles['titles']}>
                        <h2 className='font-gains'>GainsDB.com</h2>
                        <h3>A Next.js Gym Tracking App</h3>
                    </div>

                    <div className={styles['logos']}>
                        <span>
                            <RiNextjsFill title='Next.js' />
                            <BiLogoTypescript title='TypeScript' />
                            <FaNodeJs title='Node.js' />
                            <SiExpress title='Express.js' />
                            <RiVercelFill title='Vercel' />
                            <BiLogoPostgresql title='PostgreSQL' />
                            <SiRailway title='Railway' />
                        </span>
                    </div>

                </div>
                <div className={styles['links']}>
                    <span className={styles['status']}>Live App</span>
                    <span><Link href='https://www.gainsdb.com' target='new'><GiWeightLiftingUp /> Live Link</Link></span>
                    <span><Link href='https://github.com/abstractsins/GainsDB' target='new'><SiGithub /> Repo</Link></span>
                </div>
            </div>

        </div>
    );
}