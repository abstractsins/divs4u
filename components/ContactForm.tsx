'use client';

import styles from './ContactForm.module.css';

import { useState, useEffect, useRef } from 'react';
import Loader from './Loader';

import emailjs from '@emailjs/browser';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScreenGuard from './ScreenGuard';
import Loaded from './Loaded';


gsap.registerPlugin(ScrollTrigger);

type Validity = Record<keyof ContactForm, boolean>;

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormError {
    field: keyof ContactForm;
    msg: string;
}


const emptyForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
}


export default function ContactForm() {

    const formRef = useRef<HTMLFormElement>(null);

    const [formError, setFormError] = useState<FormError | undefined>()
    const [isFormAwake, setFormAwake] = useState(false);

    const [isSubmitWaiting, setSubmitWaiting] = useState(false);

    const [formState, setFormState] = useState<ContactForm>(emptyForm);

    const [showLoaded, setShowLoaded] = useState(false);

    const validate = (s: ContactForm): Validity => ({
        name: checkNameInput(s.name) && printableUnicode(s.name),
        email: checkEmailInput(s.email) && printableUnicode(s.email),
        subject: printableUnicode(s.subject),
        message: printableUnicode(s.message),
    });

    const firstError = (v: Validity): FormError | undefined => {
        if (!v.name) return { field: 'name', msg: 'Name is invalid' };
        if (!v.email) return { field: 'email', msg: 'Email is invalid' };
        if (!v.subject) return { field: 'subject', msg: 'Subject is invalid' };
        if (!v.message) return { field: 'message', msg: 'Message is invalid' };
        return undefined;
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        const v = validate(formState);

        const ok = Object.values(v).every(Boolean);
        if (!ok) {
            setFormError(firstError(v));
            return;
        }

        setFormError(undefined);
        setSubmitWaiting(true);
        console.warn('SENDING MESSAGE');

        if (formRef.current !== null) {
            formRef.current.contact_number.value = Math.random() * 100000 | 0;
        }

        emailjs.sendForm('contact_service', 'contact_form', formRef.current || '#contactForm')
            .then(
                (res) => {
                    console.log('SUCCESS!', res.status, res.text);
                    setShowLoaded(true);
                    setTimeout(() => setShowLoaded(false), 3000);
                    setFormState(emptyForm);
                },
                (err) => {
                    console.error('FAILED...', err);
                    setFormError({ field: 'message', msg: 'Failed to send. Try again.' });
                }
            )
            .finally(() => {
                setSubmitWaiting(false);
            });
    }


    const checkNameInput = (name: string): boolean => name.length > 0;

    const checkEmailInput = (email: string): boolean => !!email.match(/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i);

    const printableUnicode = (str: string): boolean => {
        return Array.from(str).every(c => {
            const code = c.codePointAt(0)!;
            return (
                code >= 0x20 &&         // space and above
                code !== 0x7F &&        // DEL
                !(code >= 0x00 && code <= 0x1F) // control chars
            );
        });
    };

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    emailjs.init(publicKey);


    // *--------------------- GSAP --------------------------- //
    useEffect(() => {

        gsap.set('#contact-wrapper', { transformPerspective: 800 });
        gsap.to('#contact-wrapper', {
            rotationY: 180,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '#contact-wrapper',
                start: 'top 36%',
                toggleActions: 'play pause resume reverse',
                // markers: true
            }
        });

        // refresh in case images/layout shift after load
        requestAnimationFrame(() => ScrollTrigger.refresh());
    }, []);


    // *--------------------- Form Validity --------------------------- //
    useEffect(() => {
        setFormAwake(!!(formState.name && formState.email && formState.message));
    }, [formState]);




    return (
        <div>
            <div id='contact-wrapper' className={`contact-fade ${styles['form-wrapper']}`}>

                {isSubmitWaiting &&
                    <>
                        <Loader msg="sending" />
                        <ScreenGuard />
                    </>
                }

                {showLoaded &&
                    <Loaded msg='message sent!' />
                }

                <div className={`${styles['face']} ${styles['wrapper-front']}`}>

                    <form ref={formRef} id={'contactForm'} className={styles['form']} onSubmit={handleSubmit}>

                        <input type="hidden" name="contact_number" />

                        {/* //* --------------------NAME-------------------- // */}
                        <div className={styles['form-row']}>
                            <div className='flex'>
                                <label className={`${styles['form-label']}`}>Name</label>
                                {formError && formError.field === 'name' &&
                                    <div className={styles['error-wrapper']}>
                                        <span className={styles['error-text']}>{formError.msg}</span>
                                    </div>
                                }
                            </div>
                            <input
                                name='name'
                                required
                                type='text'
                                maxLength={100}
                                value={formState.name}
                                className={styles['contact-field']}
                                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                            />
                        </div>

                        {/* //* --------------------EMAIL-------------------- // */}
                        <div className={styles['form-row']}>
                            <div className='flex'>
                                <label className={`${styles['form-label']}`}>Email</label>
                                {formError && formError.field === 'email' &&
                                    <div className={styles['error-wrapper']}>
                                        <span className={styles['error-text']}>{formError.msg}</span>
                                    </div>
                                }
                            </div>
                            <input
                                name='email'
                                required
                                type='text'
                                maxLength={100}
                                value={formState.email}
                                className={styles['contact-field']}
                                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value.trim() }))}
                            />
                        </div>

                        {/* //* --------------------SUBJECT-------------------- // */}
                        <div className={styles['form-row']}>
                            <div className='flex'>
                                <label className={`${styles['form-label']}`}>Subject</label>
                                {formError && formError.field === 'subject' &&
                                    <div className={styles['error-wrapper']}>
                                        <span className={styles['error-text']}>{formError.msg}</span>
                                    </div>
                                }
                            </div>
                            <input
                                name='subject'
                                type='text'
                                maxLength={100}
                                value={formState.subject}
                                placeholder='Optional'
                                className={styles['contact-field']}
                                onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                            />
                        </div>

                        {/* //* --------------------MESSAGE-------------------- // */}
                        <div className={styles['form-row']}>
                            <div className='flex'>
                                <label className={`${styles['form-label']}`}>Message</label>
                                {formError && formError.field === 'message' &&
                                    <div className={styles['error-wrapper']}>
                                        <span className={styles['error-text']}>{formError.msg}</span>
                                    </div>
                                }
                            </div>
                            <textarea
                                required
                                name='message'
                                value={formState.message}
                                maxLength={300}
                                className={`${styles['contact-field']} ${styles['message']}`}
                                placeholder='300 character limit'
                                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                            />
                        </div>

                        <div className={styles['form-row']}>
                            <input
                                type='submit'
                                value={'Submit'}
                                disabled={isSubmitWaiting}
                                className={`${styles['submit']} ${isFormAwake && !isSubmitWaiting ? styles['valid'] : styles['invalid']}`}
                            />
                        </div>

                    </form>
                </div>

                <div className={`${styles['face']} ${styles['wrapper-back']}`}>
                    <h1>@</h1>
                </div>

            </div>
            <aside>Powered by EmailJS</aside>
        </div>

    );
}