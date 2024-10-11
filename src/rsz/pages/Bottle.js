import React from 'react';
import styles from "../Components/content/Bottle/ProductDetail.module.css";
import Header from "../Components/header/Header";
import Breadcrumbs from "../Components/content/Products/Breadcrumbs";
import ProductTitle from "../Components/content/Bottle/ProductTitle";
import ProductImage from "../Components/content/Bottle/ProductImage";
import ProductSpecs from "../Components/content/Bottle/ProductSpecs";
import Footer from "../Components/footer/Footer";

export default function Bottle() {

    return (
        <div className={styles.productPage}>
            <Header />
            <main className={styles.mainContent}>
                <Breadcrumbs />
                <ProductTitle />
                <section className={styles.productSection}>
                    <ProductImage />
                    <ProductSpecs />
                    <div className={styles.bottleSchematic}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/635d0782995d8d618da8ac3ed9a128d526eb3181d4a7811d68b300990e71d190?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Bottle schematic diagram" className={styles.schematicImage} />
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}