import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard({ title, image, buttons }) {
    return (
        <article className={styles.productCard}>
            <img src={image} alt={title} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h2 className={styles.productTitle}>{title}</h2>
                <div className={styles.buttonContainer}>
                    {buttons.map((button, index) => (
                        <button key={index} className={styles.productButton}>
                            {button.text}
                            <img src={button.icon} alt="" className={styles.buttonIcon} />
                        </button>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ProductCard;