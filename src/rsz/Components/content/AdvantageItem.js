import React from 'react';
import styles from '../../assets/css/Advanteges.module.css';

const AdvantageItem = ({ icon, text }) => {
    return (
        <div className={styles.advantageItem}>
            <img src={icon} alt="" className={styles.advantageIcon} />
            <p className={styles.advantageText}>{text}</p>
        </div>
    );
};

export default AdvantageItem;