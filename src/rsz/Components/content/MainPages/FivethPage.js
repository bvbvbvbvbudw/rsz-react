import React from "react";
import styles from "../../../assets/css/MainPage.module.css";
import Advantages from "../Advantages";
import ImageGallery from "../ImageGallery";
import Footer from "../../footer/Footer";

export default function FivethPage(){
    return <>
        <div className={styles.mainPage}>

            <main className={styles.mainContent}>
                <div className={styles.contentWrapper}>
                    <Advantages/>
                    <ImageGallery/>
                </div>
            </main>
        </div>
    </>
}