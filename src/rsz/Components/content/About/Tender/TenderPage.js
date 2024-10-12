import React from 'react';
import TenderSection from './TenderSection';
import styles from './TenderPage.module.css';


function TenderPage() {
    return (
        <div className={styles.tenderPage}>
            <main className={styles.mainContent}>
                <section className={styles.tenderContent}>
                    <h1 className={styles.pageTitle}>Тендери</h1>
                    <TenderSection />
                </section>
            </main>
        </div>
    );
}

export default TenderPage;