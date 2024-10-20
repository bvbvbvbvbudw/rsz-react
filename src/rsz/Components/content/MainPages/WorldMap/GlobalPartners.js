import React, { useState } from 'react';
import styles from './GlobalPartners.module.css';
import PartnerList from './PartnerList';
import Pagination from './Pagination';
import WorldMap from './WorldMap';
import AdvantagesList from '../../Advantages/Advantages';

import {useTranslation} from "react-i18next";

const GlobalPartners = () => {
    const {t} = useTranslation();
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
            ? t('main.global.title.first')
            : t('main.global.title.second');
    };

    return (
        <section className={styles.globalPartners}>
            <div className={styles.content}>
                <div className={styles.infoColumn}>
                    <div className={styles.partnerInfo}>
                        <h1 className={styles.title}>{getTitle()}</h1>
                        <p className={styles.description}>
                            {currentPage === 1
                                ? t('main.global.description.first')
                                : t('main.global.description.second')}
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