import Image from 'next/image';
import styles from './ProjectMajorCard.module.css';

import recipePic from '@/public/images/recipe-thumbnail.webp';

import { Pacifico } from 'next/font/google';

import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { PiChefHatLight } from "react-icons/pi";

import {
    RiNextjsFill,
    RiVercelFill
} from "react-icons/ri";

import {
    SiGithub,
    SiPrisma,
    SiRailway
} from "react-icons/si";

import Link from 'next/link';

const pacifico = Pacifico({
    variable: '--font-pacifico',
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})

interface Props {
    id: string;
    className: string;
}

export default function ProjectRecipes({ id, className}: Props) {

    return (
        <div id={id} className={`${pacifico.variable} ${styles['project-card-wrapper']} ${className}`}>

            <div className={styles['left-half']}>
                <Image
                    alt="screenshot of game"
                    src={recipePic}
                />
            </div>

            <div className={styles['right-half']}>
                <div className={styles['middle']}>

                    <div className={styles['titles']}>
                        <h2 className='font-pacifico'>Recipe Box</h2>
                        <h3>Serverless Next.js Dashboard</h3>
                    </div>

                    <div className={styles['logos']}>
                        <span>
                            <RiNextjsFill title='Next.js' />
                            <BiLogoTypescript title='TypeScript' />
                            <RiVercelFill title='Vercel' />
                            <BiLogoPostgresql title='PostgreSQL' />
                            <SiRailway title='Railway' />
                            <SiPrisma title='Prisma' />
                        </span>
                    </div>

                </div>

                <div className={styles['links']}>
                    <span className={styles['status']}>Current Project</span>
                    <span><Link href='https://recipes-bub07o37h-divs4us-projects.vercel.app/login' target='_new'><PiChefHatLight /> Preview Build</Link></span>
                    <span><Link href='https://github.com/abstractsins/recipes' target='_new'><SiGithub /> Repo</Link></span>
                </div>
            </div>

        </div>
    );
}