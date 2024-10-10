import React from "react";
import styles from "./MainPage.module.css";
import Advantages from "../Advantages/Advantages";
import ImageGallery from "../MainPagesComponents/ImageGallery";
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