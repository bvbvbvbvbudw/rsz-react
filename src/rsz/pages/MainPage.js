import React from 'react';
import styles from '../assets/css/MainPage.module.css';
import Header from '../Components/header/Header';
import Advantages from '../Components/content/Advantages';
import ImageGallery from '../Components/content/ImageGallery';
import Footer from "../Components/footer/Footer";

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
            <main className={styles.mainContent}>
                <div className={styles.contentWrapper}>
                    <Advantages />
                    <ImageGallery />
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default MainPage;