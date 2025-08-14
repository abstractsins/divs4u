import styles from '../MainContent.module.css'

import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProjectGainsDB from './Projects/ProjectGainsDB';
import ProjectPuckDropper from './Projects/ProjectPuckDropper';

import { useEnterToNext } from '@/hooks/useEnterToNext';
import ProjectRecipes from './Projects/ProjectRecipes';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    useEnterToNext('projects', 'contact'); 

    useEffect(() => {
        const ctx = gsap.context(() => {
            // set initial state (so it’s invisible until triggered)
            gsap.set('.projectMajorCard', { autoAlpha: 0, y: 24, filter: 'blur(6px)' });

            gsap.to('#project-1', {
                autoAlpha: 1,
                y: 0,
                x: 0,
                filter: 'blur(0px)',
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#projects',
                    start: 'top 65%',
                    end: '+=600px',
                    toggleActions: 'play none resume reverse',
                    // markers: true,        
                },
            });

            gsap.to('#project-2', {
                autoAlpha: 1,
                y: 0,
                x: 0,
                filter: 'blur(0px)',
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#project-1',
                    start: 'top 50%',
                    end: '+=600px',
                    toggleActions: 'play none resume reverse',
                    // markers: true,        
                },
            });

            gsap.to('#project-3', {
                autoAlpha: 1,
                y: 0,
                x: 0,
                filter: 'blur(0px)',
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#project-2',
                    start: 'top 50%',
                    end: '+=600px',
                    toggleActions: 'play none resume reverse',
                    // markers: true,        
                },
            });

        });

        // refresh in case images/layout shift after load
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" className={styles["projects-container"]}>
            <h2 className={` ${styles['section-title']}`}>Projects</h2>
            <div className={styles['projects-body']}>
                <ProjectGainsDB id="project-1" className='projectMajorCard'/>   
                <ProjectRecipes id="project-2" className='projectMajorCard'/>
                <ProjectPuckDropper id="project-3" className='projectMajorCard'/>   
            </div>
        </section>
    );
}