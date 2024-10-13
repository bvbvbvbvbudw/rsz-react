import React, { useState } from 'react';

import styles from '../Components/content/About/About/AboutUs.module.css';

import Header from "../Components/header/Header";
import Breadcrumbs from "../Components/content/Products/Breadcrumbs";
import Tabs from "../Components/content/About/About/Tabs";
import CompanyInfo from "../Components/content/About/About/CompanyInfo";
import ClientList from "../Components/content/About/About/ClientList";
import ExportCountries from "../Components/content/About/About/ExportCountries";
import Footer from "../Components/footer/Footer";
import CertificationPage from "../Components/content/About/Cert/CertificationPage";
import TenderPage from "../Components/content/About/Tender/TenderPage";

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState('first');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.aboutUsPage}>
            <Header activeItem="Про нас"/>
            <main className={styles.mainContent}>
                <Breadcrumbs />
                <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
                <section className={styles.aboutUsSection}>
                    <div id="first" className={`${styles.tabContent} ${activeTab === 'first' ? styles.active : ''}`}>
                        <h1 className={styles.pageTitle}>Про нас</h1>
                        <CompanyInfo />
                        <ClientList />
                        <ExportCountries />
                        <p className={styles.companySlogan}>
                            ПрАТ «Рокитнівський скляний завод» – це сучасне високорозвинуте підприємство та Ваш надійний партнер!
                        </p>
                    </div>
                    <div id="second" className={`${styles.tabContent} ${activeTab === 'second' ? styles.active : ''}`}>
                        <CertificationPage />
                    </div>
                    <div id="third" className={`${styles.tabContent} ${activeTab === 'third' ? styles.active : ''}`}>
                        <TenderPage />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
