import Image from 'next/image';
import styles from './ProjectCard.module.css';

import recipePic from '@/public/images/recipe-thumbnail.webp';

import { Pacifico } from 'next/font/google';
import { SiGithub } from "react-icons/si";
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
                <div className={styles['titles']}>
                    <h2 className='font-pacifico'>Recipe Box</h2>
                    <h3>A Next.js Database Dashboard</h3>
                </div>
                <div className={styles['links']}>
                    <span><Link href='https://www.youtube.com/watch?v=R15gpBx2NWo' target='new'><MdOutlineOndemandVideo /> Video Link</Link></span>
                    <span><Link href='https://github.com/abstractsins/PuckDropper' target='new'><SiGithub /> Github Repo</Link></span>
                </div>
            </div>

        </div>
    );
}