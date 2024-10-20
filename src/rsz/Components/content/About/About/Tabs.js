import React from 'react';
import styles from './Tabs.module.css';
import {useTranslation} from "react-i18next";

const Tabs = ({ activeTab, onTabClick }) => {
    const {t} = useTranslation();
    return (
        <div className={styles.tabsContainer} role="tablist">
            <button
                className={`${styles.tab} ${activeTab === 'first' ? styles.activeTab : ''}`}
                role="tab"
                aria-selected={activeTab === 'first'}
                onClick={() => onTabClick('first')}
            >
                {t('header.about')}
            </button>
            <button
                className={`${styles.tab} ${activeTab === 'second' ? styles.activeTab : ''}`}
                role="tab"
                aria-selected={activeTab === 'second'}
                onClick={() => onTabClick('second')}
            >
                {t('tabs.cert')}
            </button>
            <button
                className={`${styles.tab} ${activeTab === 'third' ? styles.activeTab : ''}`}
                role="tab"
                aria-selected={activeTab === 'third'}
                onClick={() => onTabClick('third')}
            >
                {t('tabs.tender')}
            </button>
        </div>
    );
};

export default Tabs;
