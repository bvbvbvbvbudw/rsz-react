import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    return (
        <section className={styles.contactForm}>
            <h2 className={styles.formTitle}>Звʼязатись з нами</h2>
            <form className={styles.form}>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.visuallyHidden}>Ваше ім'я*</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Ваше ім'я*" required className={styles.formInput} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.visuallyHidden}>Ваше прізвище*</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Ваше прізвище*" required className={styles.formInput} />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.visuallyHidden}>Ваш номер телефону*</label>
                        <input type="tel" id="phone" name="phone" placeholder="Ваш номер телефону*" required className={styles.formInput} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.visuallyHidden}>Ваш Email*</label>
                        <input type="email" id="email" name="email" placeholder="Ваш Email*" required className={styles.formInput} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.visuallyHidden}>Компанія*</label>
                    <input type="text" id="company" name="company" placeholder="Компанія*" required className={styles.formInput} />
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="country" className={styles.visuallyHidden}>Країна</label>
                        <select id="country" name="country" className={styles.formSelect}>
                            <option value="">Країна</option>
                            {/* Add country options here */}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="market" className={styles.visuallyHidden}>Ринок</label>
                        <select id="market" name="market" className={styles.formSelect}>
                            <option value="">Ринок</option>
                            {/* Add market options here */}
                        </select>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.visuallyHidden}>Ваше повідомлення</label>
                    <textarea id="message" name="message" placeholder="Ваше повідомлення" className={styles.formTextarea}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Відправити</button>
            </form>
        </section>
    );
}

export default ContactForm;