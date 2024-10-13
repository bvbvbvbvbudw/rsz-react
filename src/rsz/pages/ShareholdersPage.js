import React from 'react';
import InfoSection from '../Components/content/Shareholders/InfoSection';
import ArticleList from '../Components/content/Shareholders/ArticleList';
import styles from '../Components/content/Shareholders/ShareholdersPage.module.css';
import Header from "../Components/header/Header";
import Breadcrumbs from "../Components/content/Products/Breadcrumbs";
import Footer from "../Components/footer/Footer";
import Pagination from "../Components/content/Products/Choose/Pagination";

const ShareholdersPage = () => {
    return (
        <div className={styles.shareholdersPage}>
            <Header activeItem="Акціонерам"/>
            <main className={styles.mainContent}>
                <Breadcrumbs />
                <section className={styles.shareholderInfo}>
                    <h1 className={styles.pageTitle}>Акціонерам</h1>
                    <InfoSection />
                    <h2 className={styles.sectionTitle}>Інформація для акціонерів та стейкхолдерів оприлюднена до 01.01.2024 року</h2>
                    <ArticleList />
                </section>
                <Pagination />
            </main>
            <Footer />
        </div>
    );
};

export default ShareholdersPage;