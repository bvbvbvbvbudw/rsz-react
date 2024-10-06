import React from 'react';
import styles from '../../../assets/css/GlassFactory.module.css';
import Header from '../../header/Header';
import HeroSection from './HeroSection';

function GlassFactory() {
    return (
        <div className={styles.banner}>
            <div className={styles.mainContent}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/221a3bff0ac8869a59b38594f21385eee95213e6dd4c39fb298b93ef196ec9ab?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                    className={styles.backgroundImage}
                    alt=""
                />
                <Header />
                <HeroSection />
            </div>
        </div>
    );
}

export default GlassFactory;