import React from 'react';
import styles from "../Components/content/Products/ProductPage.module.css";
import Header from "../Components/header/Header";
import Breadcrumbs from "../Components/content/Products/Breadcrumbs";
import ProductGrid from "../Components/content/Products/ProductGrid";
import Footer from "../Components/footer/Footer";

export default function Products()
{
    return (
        <div className={styles.productPage}>
            <Header activeItem="Продукція" />
            <main className={styles.mainContent}>
                <Breadcrumbs />
                <ProductGrid />
            </main>
            <Footer />
        </div>
    );
}