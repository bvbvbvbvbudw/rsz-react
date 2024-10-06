import React from 'react';
import styles from './WorldMap.module.css';

const WorldMap = () => {
    return (
        <div className={styles.worldMapContainer}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/90633161acc9b41de410dbe82b12cdff7b25e93a93c6d3f9333bf58e319c0566?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="World map background" className={styles.mapBackground} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2741ba0388e9e15fd99a924a8677c0ccf18610da2a454650096adc612b5d16da?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="World map overlay" className={styles.mapOverlay} />
            <div className={styles.mapContent}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4f6019fdc01748102fb69d2950c12d600fa749cb56c4860690a7eea41ee5906?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.mapDecoration} />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4e08b4dd23539a30a9c485a40b4b7dbed7130231dd26fb40b4c93d694c1d387?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Partner countries highlighted on the map" className={styles.partnerHighlight} />
            </div>
        </div>
    );
};

export default WorldMap;