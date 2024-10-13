import React from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import styles from './SinglePage.module.css';
import Header from "../../../header/Header";
import Breadcrumbs from "../../Products/Breadcrumbs";
import Footer from "../../../footer/Footer";

export default function SinglePage() {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <main className={styles.mainContent}>
                <Breadcrumbs />
                <article className={styles.articleContainer}>
                    <ArticleHeader />
                    <ArticleContent />
                </article>
            </main>
            <Footer />
        </div>
    );
};