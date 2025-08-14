import Image from 'next/image';
import styles from './ProjectMajorCard.module.css';

import puckPic from '@/public/images/puck-thumbnail.webp';

import { Rubik_Glitch } from 'next/font/google';
import { SiGithub, SiSfml, SiCplusplus } from "react-icons/si";
import { MdOutlineOndemandVideo } from "react-icons/md";

import Link from 'next/link';

const puck = Rubik_Glitch({
    variable: '--font-rubik-glitch',
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})

interface Props {
    id: string;
    className: string;
}

export default function ProjectPuckDropper({ id }: Props) {

    return (
        <div id={id} className={`${puck.variable} ${styles['project-card-wrapper']}`}>

            <div className={styles['left-half']}>
                <Image
                    alt="screenshot of game"
                    src={puckPic}
                />
            </div>

            <div className={styles['right-half']}>
                <div className={styles['middle']}>
                    <div className={styles['titles']}>
                        <h2 className='font-puck'>Puck Dropper</h2>
                        <h3>2D Physics Game made with C++</h3>
                    </div>
                    <div className={styles['logos']}>
                        <span>
                            <SiSfml title='SFML 3.0' />
                            <SiCplusplus title='C++' />
                        </span>
                    </div>
                </div>
                <div className={styles['links']}>
                    <span className={styles['status']}>Growth Project</span>
                    <span><Link href='https://www.youtube.com/watch?v=R15gpBx2NWo' target='new'><MdOutlineOndemandVideo /> Video Link</Link></span>
                    <span><Link href='https://github.com/abstractsins/PuckDropper' target='new'><SiGithub /> Repo</Link></span>
                </div>
            </div>

        </div>
    );
}