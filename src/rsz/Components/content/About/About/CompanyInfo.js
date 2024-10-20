import React from 'react';
import styles from './CompanyInfo.module.css';
import {useTranslation} from "react-i18next";

const CompanyInfo = () => {
    const {t} = useTranslation()
    return (
        <section className={styles.companyInfo}>
            <div className={styles.textContent}>
                <p className={styles.leadParagraph}>{t('about.first.companyInfo.first')}</p>
                <p className={styles.description}>{t('about.first.companyInfo.second')}</p>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f03e8ce87a5c7fe32086d7c5f3c97eff9ca5eada9c8a08146d94ab4656699a4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Рокитнівський скляний завод factory" className={styles.factoryImage} />
        </section>
    );
};

export default CompanyInfo;