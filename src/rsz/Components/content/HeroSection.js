import React from 'react';
import styles from '../../assets/css/GlassFactory.module.css';

function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <div className={styles.heroTextContent}>
                        <div className={styles.foundationYear}>
                            <div className={styles.yearNumber}>1898</div>
                            <div className={styles.yearLabel}>рік заснування</div>
                        </div>
                        <h1 className={styles.heroSlogan}>
                            Виготовляємо та доставляємо
                        </h1>
                    </div>
                </div>
            </div>
            <p className={styles.tagline}>Скло як витвір мистецтва</p>
        </section>
    );
}

export default HeroSection;