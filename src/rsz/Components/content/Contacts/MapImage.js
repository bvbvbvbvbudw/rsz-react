import React from 'react';
import styles from './MapImage.module.css';

function MapImage() {
    return (
        <section className={styles.mapSection}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/794ad65c543fe37a1d551afbfa3e15aebdf4f2c62916adb41e5edaa7c125e832?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Карта розташування Рокитнівського скляного заводу" className={styles.mapImage} />
        </section>
    );
}

export default MapImage;