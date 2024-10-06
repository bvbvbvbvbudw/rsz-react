import React from 'react';
import styles from '../../assets/css/GlassComponent.module.css';
import Header from '../header/Header';
import ContentSection from './ContentSection';

const GlassComponent = () => {
    return (
        <div className={styles.glassContainer}>
            <main className={styles.mainContent}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/743097253ce7530aacd5d6733e51bdb2092b99bae05e905cbb9bf0ca26a7be5e?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                    className={styles.backgroundImage}
                    alt=""
                />
                {/*<Header />*/}
                <ContentSection />
            </main>
        </div>
    );
};

export default GlassComponent;