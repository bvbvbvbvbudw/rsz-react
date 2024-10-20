import React from 'react';
import styles from './InfoSection.module.css';
import {useTranslation} from "react-i18next";

const InfoSection = () => {
    const {t} = useTranslation()
    return (
        <section className={styles.infoSection}>
            <p className={styles.infoText}>
                {t('shareholders.info')}
            </p>
            <a href="http://00293462.infosite.com.ua" className={styles.infoLink}>
                00293462.infosite.com.ua
            </a>
        </section>
    );
};

export default InfoSection;