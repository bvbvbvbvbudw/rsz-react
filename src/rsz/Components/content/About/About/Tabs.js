import React from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ activeTab, onTabClick }) => {
    return (
        <div className={styles.tabsContainer} role="tablist">
            <button
                className={`${styles.tab} ${activeTab === 'first' ? styles.activeTab : ''}`}
                role="tab"
                aria-selected={activeTab === 'first'}
                onClick={() => onTabClick('first')}
            >
                Про нас
            </button>
            <button
                className={`${styles.tab} ${activeTab === 'second' ? styles.activeTab : ''}`}
                role="tab"
                aria-selected={activeTab === 'second'}
                onClick={() => onTabClick('second')}
            >
                Сертифікація
            </button>
            <button
                className={`${styles.tab} ${activeTab === 'third' ? styles.activeTab : ''}`}
                role="tab"
                aria-selected={activeTab === 'third'}
                onClick={() => onTabClick('third')}
            >
                Тендери
            </button>
        </div>
    );
};

export default Tabs;
