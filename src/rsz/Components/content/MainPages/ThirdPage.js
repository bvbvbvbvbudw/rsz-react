import React from 'react';
import styles from "./GlassComponent.module.css";

import bg from '../../../assets/img/background.png';
import photo from '../../../assets/img/photo.png';

import './style.css';
import {useTranslation} from "react-i18next";

export default function ThirdPage() {
    const {t} = useTranslation();
    return (
        <>
            <div className={styles.glassContainer}>
                <main className={styles.mainContent}>
                    <img
                        loading="lazy"
                        src={bg}
                        className={styles.backgroundImage}
                        alt="BG"
                    />
                    <div className="container">
                        <img src={photo} className="photo" alt="Photo" />
                        <div className="info">
                            <div className={styles.title}>{t('main.history.title')}</div>
                            <p className={styles.topDescription}>{t('main.history.top_description')}</p>
                            <div className={styles.bottomWrapper}>
                                <p className={styles.leftSide}>{t('main.history.left_side')}</p>
                                <p className={styles.bottomDescription}>{t('main.history.bottom_description')}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
