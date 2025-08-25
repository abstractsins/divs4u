import styles from './Connect.module.css';

import Image from 'next/image';
import gitHub from '@/public/images/github-mark-white.svg';
import linkedIn from '@/public/images/linkedin-white.webp';
import Link from 'next/link';


export default function Connect() {

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Connect</span>

            <Link target='_new' href={'https://github.com/abstractsins'}>
                <Image
                    id="github"
                    className={styles.logo}
                    src={gitHub}
                    alt='gitHub logo'
                />
            </Link>

            <Link target='_new' href={'https://www.linkedin.com/in/divs4u/'}>
                <Image
                    id="linkedin"
                    className={styles.logo}
                    src={linkedIn}
                    alt='linkedin logo'
                />
            </Link>

        </div>
    );
}