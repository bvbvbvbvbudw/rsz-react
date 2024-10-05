import React from 'react';
import styles from '../../assets/css/Footer.module.css';

const ContactItem = ({ icon, text, isAddress = false }) => (
    <div className={styles.contactItem}>
        <div className={styles.contactContent}>
            <div className={styles.iconContainer}>
                <img loading="lazy" src={icon} alt="" className={styles.contactIcon} />
            </div>
            <div className={styles.spacer} />
            <div className={`${styles.contactText} ${isAddress ? styles.contactAddress : ''}`}>
                {text}
            </div>
        </div>
    </div>
);

export default ContactItem;