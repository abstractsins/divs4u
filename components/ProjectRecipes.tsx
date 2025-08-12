import Image from 'next/image';
import styles from './ProjectCard.module.css';

import recipePic from '@/public/images/recipe-thumbnail.webp';

import { Pacifico } from 'next/font/google';

import { GiWeightLiftingUp } from "react-icons/gi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { PiChefHatLight } from "react-icons/pi";
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
import { MdOutlineOndemandVideo } from "react-icons/md";

import Link from 'next/link';

const pacifico = Pacifico({
    variable: '--font-pacifico',
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})

interface Props {
    id: string;
}

export default function ProjectRecipes({ id }: Props) {

    return (
        <div id={id} className={`${pacifico.variable} ${styles['project-card-wrapper']}`}>

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
                            <SiPrisma title='Prisma' />
                            <SiRailway title='Railway' />
                        </span>
                    </div>

                </div>

                <div className={styles['links']}>
                    <span className={styles['status']}>Current Project</span>
                    <span><Link href='https://recipes-56gtc1c5z-divs4us-projects.vercel.app/login' target='new'><PiChefHatLight /> Preview Build</Link></span>
                    <span><Link href='https://github.com/abstractsins/recipes' target='new'><SiGithub /> Repo</Link></span>
                </div>
            </div>

        </div>
    );
}