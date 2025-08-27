import ContactForm from '@/components/sections/Contact/ContactForm';
import styles from '@/components/MainContent.module.css';
import Connect from './Contact/Connect';

import { useEnterToNext } from '@/hooks/useEnterToNext';

export default function Contact() {

    useEnterToNext('contact', 'about');

    return (
        <section id='contact' className={styles['contact-container']}>
            <h2 className={` ${styles['section-title']}`}>Contact</h2>
            <div className={styles['contact-body']}>
                <ContactForm />
                <Connect />
            </div>
        </section>
    );
}