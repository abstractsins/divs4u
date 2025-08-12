'use client';

import {
    useEffect,
    useState,
    useRef,
} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from '../MainContent.module.css'
import TypeBox from '../TypeBox';

import { aboutSkillsType } from '@/data/data';
import { useEnterToNext } from '@/hooks/useEnterToNext';

import AboutBio from '../AboutBio';

gsap.registerPlugin(ScrollTrigger);


export default function About() {

    useEnterToNext('about', 'projects');

    const [typeOn, setTypeOn] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boxRef.current) return;
        const st = ScrollTrigger.create({
            trigger: boxRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => setTypeOn(true),
        });
        return () => st.kill();
    }, []);


    return (
        <section id="about" className={styles["about-container"]}>
            <h2 className={`${styles['section-title']}`}>About</h2>
            <div className={styles['about-body']}>
                <div className={`bio-left ${styles['bio-left']}`}>
                    <div id="bio-pic" className={`about-fade image-container ${styles['bio-pic']}`}></div>

                    <div ref={boxRef}>
                        <TypeBox active={typeOn} data={aboutSkillsType} />
                    </div>

                </div>
                <div className={`bio-right ${styles['bio-right']}`}>
                    <div id="about-text-container" className={`about-fade ${styles['about-text-container']} text-3xl`}>
                        <AboutBio />
                    </div>
                </div>
            </div>
        </section>
    );
}