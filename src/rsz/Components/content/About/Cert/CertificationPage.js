import React from 'react';

import styles from './CertificationPage.module.css';
import CertificationInfo from "./CertificationInfo";
import FeatureSection from "./FeatureSection";

const CertificationPage = () => {
    return (
        <div className={styles.certificationPage}>
            <main>
                <CertificationInfo />
                <FeatureSection />
            </main>
        </div>
    );
};

export default CertificationPage;