'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ContactForm.module.css';

gsap.registerPlugin(ScrollTrigger);


export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(e.currentTarget);

        if (checkNameInput(name) && printableAscii(email)) { }
        else if (checkEmailInput(email) && printableAscii(email)) { }
        else if (printableAscii(message)) { }
        else if (printableAscii(subject)) { }
    }

    const checkNameInput = (name: string): boolean => name.length > 2;

    const checkEmailInput = (email: string): boolean => !!email.match(/.{1,}@.{1,}\.[a-z]{2,4}/i);

    const printableAscii = (string: string): boolean => string.split('').every(c => c.charCodeAt(0) >= 32 && c.charCodeAt(0) <= 126);


    useEffect(() => {

        gsap.set('#contact-wrapper', { transformPerspective: 800 });
        gsap.to('#contact-wrapper', { 
            rotationY: 180, 
            duration: 1.5, 
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '#contact-wrapper',
                start: 'top 33%',
                toggleActions: 'play pause resume reverse',
                // markers: true
            }
        });

        // refresh in case images/layout shift after load
        requestAnimationFrame(() => ScrollTrigger.refresh());
    }, []);


    return (
        <div id='contact-wrapper' className={`contact-fade ${styles['form-wrapper']}`}>
            <div className={`${styles['face']} ${styles['wrapper-front']}`}>

                <form className={styles['form']} onSubmit={handleSubmit}>

                    <div className={styles['form-row']}>
                        <label className={`${styles['form-label']}`}>Name</label>
                        <input
                            required
                            type='text'
                            value={name}
                            className={styles['contact-field']}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={styles['form-row']}>
                        <label className={`${styles['form-label']}`}>Email</label>
                        <input
                            required
                            type='text'
                            value={email}
                            className={styles['contact-field']}
                            onChange={(e) => setEmail(e.target.value.trim())}
                        />
                    </div>

                    <div className={styles['form-row']}>
                        <label className={`${styles['form-label']}`}>Subject</label>
                        <input
                            type='text'
                            value={subject}
                            className={styles['contact-field']}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className={styles['form-row']}>
                        <label className={`${styles['form-label']}`}>Message</label>
                        <textarea
                            required
                            name='message'
                            value={message}
                            maxLength={300}
                            className={`${styles['contact-field']} ${styles['message']}`}
                            placeholder='300 character limit'
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className={styles['form-row']}>
                        <input
                            type='submit'
                            value={'Submit'}
                            className={styles['submit']}
                        />
                    </div>

                </form>
            </div>
            
            <div className={`${styles['face']} ${styles['wrapper-back']}`}>
                <h1>@</h1>
            </div>

        </div>
    );
}