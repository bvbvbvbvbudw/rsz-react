import React from 'react';
import styles from '../../assets/css/Footer.module.css';

const NavButton = ({ text }) => (
    <div className={styles.navButton}>
        <div className={styles.navButtonText}>{text}</div>
    </div>
);

export default NavButton;