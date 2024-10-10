import React from 'react';
import ProductGrid from './ProductGrid';
import Breadcrumbs from './Breadcrumbs';
import styles from './ProductPage.module.css';
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

function ProductPage() {
    return (
        <div className={styles.productPage}>
            <Header />
            <main className={styles.mainContent}>
                <Breadcrumbs />
                <ProductGrid />
            </main>
            <Footer />
        </div>
    );
}

export default ProductPage;