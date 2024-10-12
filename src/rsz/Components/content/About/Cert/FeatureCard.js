import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className={styles.featureCard}>
            <img src={icon} alt="" className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>
        </div>
    );
};

export default FeatureCard;