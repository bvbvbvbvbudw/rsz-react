import React from 'react';
import styles from './ProductTitle.module.css';

function ProductTitle() {
    return (
        <div className={styles.titleContainer}>
            <button className={styles.backButton} aria-label="Go back">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb622a4821747edd7bf7b6ddcf7b5ec88288a2191f880811de50c42e365c3f66?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.backIcon} />
            </button>
            <h1 className={styles.productTitle}>Типова тара для вина Dorato 750</h1>
        </div>
    );
}

export default ProductTitle;