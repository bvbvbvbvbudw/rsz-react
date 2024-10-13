import React from 'react';
import styles from './InfoSection.module.css';

const InfoSection = () => {
    return (
        <section className={styles.infoSection}>
            <p className={styles.infoText}>
                "Інформація для акціонерів та стейкхолдерів" розміщена на сайті:
            </p>
            <a href="http://00293462.infosite.com.ua" className={styles.infoLink}>
                00293462.infosite.com.ua
            </a>
        </section>
    );
};

export default InfoSection;