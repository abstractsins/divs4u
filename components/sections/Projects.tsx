import styles from '../MainContent.module.css'

import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProjectGainsDB from './Projects/ProjectGainsDB';
import ProjectPuckDropper from './Projects/ProjectPuckDropper';

import { useEnterToNext } from '@/hooks/useEnterToNext';
import ProjectRecipes from './Projects/ProjectRecipes';

import sammySeal from '@/public/images/sammysealpage.webp';
const imgWidthSammy = 1529;
const imgHeightSammy = 877;

import steamedHams from '@/public/images/steamedhams.webp';
const imgWidthSteamed = 959;
const imgHeightSteamed = 701;

import weather from '@/public/images/weather.webp';
const imgWidthWeather = 5472;
const imgHeightWeather = 3648;

import ProjectMajorCard from './Projects/ProjectMajorCard';


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
            })

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

            gsap.to('#project-4', {
                autoAlpha: 1,
                y: 0,
                x: 0,
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

            gsap.to('#project-5', {
                autoAlpha: 1,
                y: 0,
                x: 0,
                filter: 'blur(0px)',
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#project-4',
                    start: 'top 50%',
                    end: '+=600px',
                    toggleActions: 'play none resume reverse',
                    // markers: true,        
                },
            });

            gsap.to('#project-6', {
                autoAlpha: 1,
                y: 0,
                x: 0,
                filter: 'blur(0px)',
                duration: 1.25,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#project-5',
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
        <section id='projects' className={styles['projects-container']}>
            <h2 className={` ${styles['section-title']}`}>Projects</h2>
            <div className={styles['projects-body']}>
                
                <ProjectGainsDB id='project-1' className='projectMajorCard' />
                <ProjectRecipes id='project-2' className='projectMajorCard' />
                <ProjectPuckDropper id='project-3' className='projectMajorCard' />

                {/*  STEAMED HAMS */}
                <ProjectMajorCard
                    title='steamedHamsJS'
                    subtitle='Adaptation of the Simpsons skit'

                    id='project-4'
                    className='projectMajorCard'

                    thumbnailSrc={steamedHams}
                    alt='picture of Seymour Skinner with hamburgers'
                    thumbnailH={imgHeightSteamed}
                    thumbnailW={imgWidthSteamed}

                    tech={'javascript node'.split(' ')}
                    status='For Fun'

                    link1='https://github.com/abstractsins/steamedHams'
                    linkType1='repo'
                />

                {/* WEATHER */}
                <ProjectMajorCard
                    title='WhatsTheDamnWeather.com'
                    subtitle='Emotional AI Next.js Weather App'

                    id='project-5'
                    className='projectMajorCard'

                    thumbnailSrc={weather}
                    alt='picture of clouds'
                    thumbnailH={imgHeightWeather}
                    thumbnailW={imgWidthWeather}

                    tech={'typescript next vercel'.split(' ')}
                    status='Live Site'

                    link1='https://www.whatsthedamnweather.com'
                    linkType1='live'

                    link2='https://github.com/abstractsins/nextWeather'
                    linkType2='repo'
                />

                {/* SAMMY SEAL */}
                <ProjectMajorCard
                    title='Sammy Seal'
                    subtitle='Dad joke randomizer'

                    id='project-6'
                    className='projectMajorCard'

                    thumbnailSrc={sammySeal}
                    alt='picture of Sammy Seal puppet'
                    thumbnailH={imgHeightSammy}
                    thumbnailW={imgWidthSammy}

                    tech={'javascript typescript next node vercel'.split(' ')}
                    status='Live Site'

                    link1='https://www.sammyseal.com'
                    linkType1='live'

                    link2='https://github.com/abstractsins/originalsamseal.github.io'
                    linkType2='repo'
                />

            </div>
        </section>
    );
}