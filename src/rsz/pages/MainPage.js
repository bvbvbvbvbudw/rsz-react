import React from 'react';
import styles from '../assets/css/MainPage.module.css';
import Header from '../Components/header/Header';
import Advantages from '../Components/content/Advantages';
import ImageGallery from '../Components/content/ImageGallery';
import Footer from "../Components/footer/Footer";
import GlassFactory from "../Components/content/MainPagesComponents/GlassFactory";
import GlassPage from "./GlassPage";
import ProductionWine from "./ProductionWine";

const MainPage = () => {
    return (
        <div className="wrapper">
            {/*<Header />*/}
            <GlassFactory/>
            <GlassPage/>
            {/*// TODO: page number 3*/}
            <ProductionWine/>
            <div className={styles.mainPage}>

                <main className={styles.mainContent}>
                    <div className={styles.contentWrapper}>
                        <Advantages />
                        <ImageGallery />
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default MainPage;