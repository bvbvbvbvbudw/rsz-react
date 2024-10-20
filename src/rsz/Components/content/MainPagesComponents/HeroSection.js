import React from 'react';
import styles from './GlassFactory.module.css';
import { useTranslation } from 'react-i18next';

function HeroSection() {
    const { t } = useTranslation();
    return (<>
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <div className={styles.heroTextContent}>
                        <div className={styles.foundationYear}>
                            <div className={styles.yearNumber}>1898</div>
                            <div className={styles.yearLabel}>{t('main.hero.label')}</div>
                        </div>
                        <h1 className={styles.heroSlogan}>
                            {t('main.hero.slogan')}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    <p className={styles.tagline}>{t('main.hero.tag')}</p>
   </> );
}

export default HeroSection;