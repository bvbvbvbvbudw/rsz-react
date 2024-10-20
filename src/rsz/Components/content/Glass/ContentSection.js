import React from 'react';
import styles from '../MainPages/GlassComponent.module.css';
import { useTranslation } from "react-i18next";

const ContentSection = () => {
    const {t} = useTranslation()
    return (
        <section className={styles.contentSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.sectionTitle}>{t('main.glass.title')}</h2>
                <div className={styles.textContainer}>
                    <div className={styles.textColumn}>
                        <div className={styles.verticalLine} />
                        <p className={styles.textContent}>{t('main.glass.text_content')}</p>
                    </div>
                    <div className={styles.textColumn}>
                        <div className={styles.verticalLine} />
                        <p className={styles.textContent}>{t('main.glass.text_content_second')}</p>
                    </div>
                </div>
            </div>
            <p className={styles.slogan}>{t('main.glass.slogan')}</p>
        </section>
    );
};

export default ContentSection;