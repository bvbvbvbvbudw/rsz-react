import React from 'react';
import ProductFilter from '../Components/content/Products/Choose/ProductFilter';
import ProductGrid from '../Components/content/Products/Choose/ProductGrid';
import Pagination from '../Components/content/Products/Choose/Pagination';
import ProductionInfo from '../Components/content/Products/Choose/ProductionInfo';
import styles from '../Components/content/Products/Choose/ProductPage.module.css';
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";

const ProductPage = () => {
    return (
        <div className={styles.productPage}>
            <Header />
            <main className={styles.mainContent}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f506ac12f2cf6615cb7353be754a3d8c2c28b14d4178c049b9cbacb7dd77d4a?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Hero banner" className={styles.heroBanner} />
                <div className={styles.productSection}>
                    <ProductFilter />
                    <div className={styles.productDisplay}>
                        <ProductGrid />
                        <Pagination />
                    </div>
                </div>
                <ProductionInfo />
            </main>
            <Footer />
        </div>
    );
};

export default ProductPage;