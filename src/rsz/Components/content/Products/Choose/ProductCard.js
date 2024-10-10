import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ name, height, diameter, volume, weight, image }) => {
    return (
        <div className={styles.productCard}>
            <img src={image} alt={name} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h3 className={styles.productName}>{name}</h3>
                <hr className={styles.divider} />
                <ul className={styles.productSpecs}>
                    <li className={styles.specItem}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/473b5ea9ff74c9e7784fa74b361a1480d0690383700dadbd8067c9e0e858f0b6?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Height icon" className={styles.specIcon} />
                        <span>{height} мм.</span>
                    </li>
                    <li className={styles.specItem}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7726de03b9e26da5ebedf76ba0d1644d6bbd771558c0f7f50174cc4f2cf6b577?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Diameter icon" className={styles.specIcon} />
                        <span>{diameter} мм.</span>
                    </li>
                    <li className={styles.specItem}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93cf96f16c212eee91ee3229ff6939a5ad3aba8406f6f89085ee12aa4c41782?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Volume icon" className={styles.specIcon} />
                        <span>{volume} мл.</span>
                    </li>
                    <li className={styles.specItem}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdadc821c4e8948351bd41903d4b5e1a0377dfd1abe8adeeaa1980ff1f115043?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Weight icon" className={styles.specIcon} />
                        <span>{weight} г.</span>
                    </li>
                </ul>
                <div className={styles.actionButtons}>
                    <button className={styles.actionButton} aria-label="Add to favorites">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b80ee435a84df233c6937e00b2e495ab55c3e4e795b488d99e09c9f39169ed7?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.buttonIcon} />
                    </button>
                    <button className={styles.actionButton} aria-label="Compare">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d06ad994358f80dc521bf11e7d4b6bdc192b96e1b37693fe0d48744f8d328f83?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.buttonIcon} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;