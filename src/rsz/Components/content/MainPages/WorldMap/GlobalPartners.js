import React from 'react';
import styles from './GlobalPartners.module.css';
import PartnerList from './PartnerList';
import Pagination from './Pagination';
import WorldMap from './WorldMap';

const GlobalPartners = () => {
    return (
        <section className={styles.globalPartners}>
            <div className={styles.content}>
                <div className={styles.infoColumn}>
                    <div className={styles.partnerInfo}>
                        <h1 className={styles.title}>Глобальна мережа партнерів з інших країн світу</h1>
                        <p className={styles.description}>
                            Наша компанія володіє високим рівнем довіри з боку інших країн. Це визнання свідчить про надійність та якість наших продуктів та послуг, що робить нас надійним партнером у міжнародних відносинах.
                        </p>
                    </div>
                    <PartnerList />
                    <Pagination />
                </div>
                <WorldMap />
            </div>
        </section>
    );
};

export default GlobalPartners;