import React from 'react';
import styles from "../../../assets/css/GlassComponent.module.css";

import bg from '../../../assets/img/background.png'
import photo from '../../../assets/img/photo.png'

import './style.css'
export default function ThirdPage()
{
    return <>
        <div className={styles.glassContainer}>
            <main className={styles.mainContent}>
                <img
                    loading="lazy"
                    src={bg}
                    className={styles.backgroundImage}
                    alt=""
                />
                <div className="container">
                    <img src={photo} alt="Photo"/>
                    <div className="info">

                    </div>
                </div>
            </main>
        </div>
    </>
}
