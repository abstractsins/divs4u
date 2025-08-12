import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(e.currentTarget);

        if (checkNameInput(name) && printableAscii(email)) {}
        else if (checkEmailInput(email) && printableAscii(email)) {}
        else if (printableAscii(message)) {}
        else if (printableAscii(subject)) {}
    }

    const checkNameInput = (name: string): boolean => name.length > 2;

    const checkEmailInput = (email: string): boolean => !!email.match(/.{1,}@.{1,}\.[a-z]{2,4}/i);

    const printableAscii = (string: string): boolean => string.split('').every(c => c.charCodeAt(0) >= 32 && c.charCodeAt(0) <= 126);
    

    return (
        <div className={styles['form-wrapper']}>
            <form className={styles['form']} onSubmit={handleSubmit}>

                <div className={styles['form-row']}>
                    <label className='form-label'>Name</label>
                    <input
                        required
                        type='text'
                        className={styles['contact-field']}
                        onChange={(e) => setName(e.target.value.trim())}
                    />
                </div>

                <div className={styles['form-row']}>
                    <label className='form-label'>Email</label>
                    <input
                        required
                        type='text'
                        className={styles['contact-field']}
                        onChange={(e) => setEmail(e.target.value.trim())}
                    />
                </div>

                <div className={styles['form-row']}>
                    <label className='form-label'>Subject</label>
                    <input
                        type='text'
                        className={styles['contact-field']}
                        onChange={(e) => setSubject(e.target.value.trim())}
                    />
                </div>

                <div className={styles['form-row']}>
                    <label className='form-label'>Message</label>
                    <textarea
                        required
                        name="message"
                        maxLength={300}
                        className={styles['contact-field']}
                        placeholder='300 character limit'
                        onChange={(e) => setMessage(e.target.value.trim())}
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
    );
}