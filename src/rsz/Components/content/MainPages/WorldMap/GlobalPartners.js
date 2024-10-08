import React, { useState } from 'react';
import styles from './GlobalPartners.module.css';
import PartnerList from './PartnerList';
import Pagination from './Pagination';
import WorldMap from './WorldMap';
import AdvantagesList from '../../Advantages';

const GlobalPartners = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePageChange = (pageNumber) => {
        if (pageNumber !== currentPage) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentPage(pageNumber);
                setIsTransitioning(false);
            }, 500);
        }
    };

    const getTitle = () => {
        return currentPage === 1
            ? 'Глобальна мережа партнерів з інших країн світу'
            : 'Наші переваги';
    };

    return (
        <section className={styles.globalPartners}>
            <div className={styles.content}>
                <div className={styles.infoColumn}>
                    <div className={styles.partnerInfo}>
                        <h1 className={styles.title}>{getTitle()}</h1>
                        <p className={styles.description}>
                            {currentPage === 1
                                ? 'Наша компанія володіє високим рівнем довіри з боку інших країн. Це визнання свідчить про надійність та якість наших продуктів та послуг, що робить нас надійним партнером у міжнародних відносинах.'
                                : 'Ми надаємо унікальні переваги, які роблять нас надійним партнером для наших клієнтів та покупців.'}
                        </p>
                    </div>

                    <div className={`${styles.fadeContainer} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
                        {currentPage === 1 && <PartnerList />}
                        {currentPage === 2 && <AdvantagesList />}
                    </div>

                    <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
                </div>
                <WorldMap />
            </div>
        </section>
    );
};

export default GlobalPartners;