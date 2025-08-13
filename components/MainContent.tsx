'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './MainContent.module.css';
import Header from './Header';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function MainContent() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // set initial state (so it’s invisible until triggered)
            gsap.set('.about-fade', { autoAlpha: 0, y: 24, filter: 'blur(6px)' });

            gsap.to('.about-fade', {
                autoAlpha: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.25,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#about',      
                    start: 'top 40%',       
                    end: '+=500px',
                    toggleActions: 'play pause resume reverse',
                    // markers: true,        
                },
            });
        });

        // refresh in case images/layout shift after load
        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => ctx.revert();
    }, []);

    return (
        <div className={styles['main-content']}>
            <Header />
            <About />   
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
