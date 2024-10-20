import React from 'react';
import TenderSection from './TenderSection';
import styles from './TenderPage.module.css';
import {useTranslation} from "react-i18next";

function TenderPage() {
    const {t} = useTranslation()
    return (
        <div className={styles.tenderPage}>
            <main className={styles.mainContent}>
                <section className={styles.tenderContent}>
                    <h1 className={styles.pageTitle}>{t('about.third.title')}</h1>
                    <TenderSection />
                </section>
            </main>
        </div>
    );
}

export default TenderPage;