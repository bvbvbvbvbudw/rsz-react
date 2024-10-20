import React from 'react';
import ProductFilter from '../Components/content/Products/Choose/ProductFilter';
import ProductGrid from '../Components/content/Products/Choose/ProductGrid';
import Pagination from '../Components/content/Products/Choose/Pagination';
import ProductionInfo from '../Components/content/Products/Choose/ProductionInfo';
import styles from '../Components/content/Products/Choose/ProductPage.module.css';
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Breadcrumbs from "../Components/content/Products/Breadcrumbs";

import {useTranslation} from "react-i18next";

const ProductPage = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.productPage}>
            <Header activeItem="Продукція" />
            <section className={styles.mainContent}>
                <div className={styles.topContent}>
                    <div className={styles.breadcrumbs}>
                        <Breadcrumbs theme="white"/>
                    </div>
                    <p className={styles.slogan}>{t('main.wine.slogan')}</p>
                </div>
                <div className={styles.productSection}>
                    <ProductFilter />
                    <div className={styles.productDisplay}>
                        <ProductGrid />
                        <Pagination />
                    </div>
                </div>
                <ProductionInfo />
            </section>
            <Footer />
        </div>
    );
};

export default ProductPage;