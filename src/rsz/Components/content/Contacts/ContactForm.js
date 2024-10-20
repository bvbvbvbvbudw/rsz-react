import React from 'react';
import styles from './ContactForm.module.css';
import { useTranslation } from 'react-i18next';

function ContactForm() {
    const { t } = useTranslation();

    return (
        <section className={styles.contactForm}>
            <h2 className={styles.formTitle}>{t('contactForm.title')}</h2>
            <form className={styles.form}>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.visuallyHidden}>{t('contactForm.firstName')}</label>
                        <input type="text" id="firstName" name="firstName" placeholder={t('contactForm.firstName')} required className={styles.formInput} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.visuallyHidden}>{t('contactForm.lastName')}</label>
                        <input type="text" id="lastName" name="lastName" placeholder={t('contactForm.lastName')} required className={styles.formInput} />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.visuallyHidden}>{t('contactForm.phone')}</label>
                        <input type="tel" id="phone" name="phone" placeholder={t('contactForm.phone')} required className={styles.formInput} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.visuallyHidden}>{t('contactForm.email')}</label>
                        <input type="email" id="email" name="email" placeholder={t('contactForm.email')} required className={styles.formInput} />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.visuallyHidden}>{t('contactForm.company')}</label>
                    <input type="text" id="company" name="company" placeholder={t('contactForm.company')} required className={styles.formInput} />
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="country" className={styles.visuallyHidden}>{t('contactForm.country')}</label>
                        <select id="country" name="country" className={styles.formSelect}>
                            <option value="">{t('contactForm.country')}</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="market" className={styles.visuallyHidden}>{t('contactForm.market')}</label>
                        <select id="market" name="market" className={styles.formSelect}>
                            <option value="">{t('contactForm.market')}</option>
                        </select>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.visuallyHidden}>{t('contactForm.message')}</label>
                    <textarea id="message" name="message" placeholder={t('contactForm.message')} className={styles.formTextarea}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>{t('contactForm.submit')}</button>
            </form>
        </section>
    );
}

export default ContactForm;
