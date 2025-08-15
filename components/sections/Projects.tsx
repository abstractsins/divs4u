import styles from '../MainContent.module.css'

import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProjectGainsDB from './Projects/ProjectGainsDB';
import ProjectPuckDropper from './Projects/ProjectPuckDropper';

import { useEnterToNext } from '@/hooks/useEnterToNext';
import ProjectRecipes from './Projects/ProjectRecipes';
import ProjectMinorCard from './Projects/ProjectMinorCard';

import sammySeal from '@/public/images/sammy1.webp';
const imgWidthSammy = 725;
const imgHeightSammy = 928;

import steamedHams from '@/public/images/steamedhams.webp';
const imgWidthSteamed = 959;
const imgHeightSteamed = 701;

import cipher from '@/public/images/caesar.webp';


gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    useEnterToNext('projects', 'contact');

    useEffect(() => {
        const ctx = gsap.context(() => {
            // set initial state (so it’s invisible until triggered)
            gsap.set(['.projectMajorCard', '.minor-row'], { autoAlpha: 0, y: 0, filter: 'blur(6px)' });

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

            gsap.to('#minor-row-1', {
                autoAlpha: 1,
                filter: 'blur(0px)',
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#project-3',
                    start: 'top 50%',
                    end: '+=600px',
                    toggleActions: 'play none resume reverse',
                    // markers: true,        
                },
            });

            gsap.to('#minor-3', {
                autoAlpha: 1,
                y: 0,
                x: 0,
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#project-3',
                    start: 'top 50%',
                    end: '+=600px',
                    toggleActions: 'play none resume reverse',
                    // markers: true,        
                },
            });

            gsap.to('#minor-2', {
                autoAlpha: 1,
                y: 0,
                x: 0,
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#minor-3',
                    // start: 'right center',
                    // end: '+=600px',
                    toggleActions: 'play none resume reverse',
                    // markers: true,        
                },
            });

            gsap.to('#minor-1', {
                autoAlpha: 1,
                y: 0,
                x: 0,
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#minor-2',
                    start: 'right center',
                    // end: '+=600px',
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
                <ProjectGainsDB id="project-1" className='projectMajorCard' />
                <ProjectRecipes id="project-2" className='projectMajorCard' />
                <ProjectPuckDropper id="project-3" className='projectMajorCard' />
                <div id="minor-row-1" className={`minor-row ${styles['minor-row']}`}>
                    <ProjectMinorCard
                        id="minor-1"
                        title='SammySeal.com'
                        subtitle='Thij-pykpjom  oirtj s is a smaller project'
                        className='projectMinorCard row1'
                        image={sammySeal}
                        imgWidth={imgWidthSammy}
                        imgHeight={imgHeightSammy}
                        alt='picture of Sammy Seal'
                        linkType='live'
                        link='https://www.sammyseal.com'
                    />
                    <ProjectMinorCard
                        id="minor-2"
                        title='SteamedHamsJS'
                        subtitle='Thij-pykpjom  oirtj s is a smaller project'
                        className='projectMinorCard row1'
                        image={steamedHams}
                        imgWidth={imgWidthSteamed}
                        imgHeight={imgHeightSteamed}
                        alt='picture of Seymour Skinner with hamburgers'
                        linkType='repo'
                        link=''
                    />
                    <ProjectMinorCard
                        id="minor-3"
                        title='Caesar Cipher'
                        subtitle='Thij-pykpjom  oirtj s is a smaller project'
                        className='projectMinorCard row1'
                        image={cipher}
                        alt='picture of code'
                        linkType='repo'
                        link=''
                    />
                </div>
            </div>
        </section>
    );
}