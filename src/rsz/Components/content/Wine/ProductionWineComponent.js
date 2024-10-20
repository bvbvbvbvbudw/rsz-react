import React, { useState } from "react";
import Menu from "./Menu";
import styles from "./ProductionWineComponent.module.css";

import wineOne from '../../../assets/img/wine1.png';
import chimics from '../../../assets/img/Group 168.png';
import piwo from '../../../assets/img/Group 166.png';
import mineral from '../../../assets/img/ПродукціяВода.png';

import {useTranslation} from "react-i18next";



const backgroundImages = [
    piwo,
    wineOne,
    mineral,
    chimics
];

const ProductionWineComponent = () => {
    const {t} = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const menuItems = [
        { title: t('main.wine.slider.first'), image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d82b446c2e9635b8255d1d82653a9bf444a92f671c97e4b7d775f84c16792b4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" },
        { title: t('main.wine.slider.second'), image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bd1762ac14c9cfc2fbd7da91e8e64c5a52b7e44000b3fe7a15ffecf8f826261?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" },
        { title: t('main.wine.slider.third'), image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1669f0bc20e60d784579b0ffd8a651f51862c8aedcad771d85433d2250860763?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" },
        { title: t('main.wine.slider.fourth'), image: "https://cdn.builder.io/api/v1/image/assets/TEMP/50db57235891b84736c3cb47a8644cf8297234c7efec3fd3d27ed737b62e5c0a?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" }
    ];
    const handleMenuClick = (index) => {
        if (index !== activeIndex && !isAnimating) {
            setNextIndex(index);
            setIsAnimating(true);

            setTimeout(() => {
                setActiveIndex(index);
                setIsAnimating(false);
                setNextIndex(null);
            }, 500);
        }
    };

    return (
        <div className={styles.productionWine}>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <img
                        key={`current-${activeIndex}`}
                        loading="lazy"
                        src={backgroundImages[activeIndex]}
                        alt=""
                        className={`${styles.backgroundImage} ${isAnimating ? styles.fadeOut : ""}`}
                    />
                    {nextIndex !== null && (
                        <img
                            key={`next-${nextIndex}`}
                            loading="lazy"
                            src={backgroundImages[nextIndex]}
                            alt=""
                            className={`${styles.backgroundImage} ${isAnimating ? styles.fadeIn : ""}`}
                        />
                    )}
                </div>

                <main className={styles.contentWrapper}>
                    <div className={styles.columnLayout}>
                        <section className={styles.leftColumn}>
                            <h1 className={styles.mainHeading}>
                                {t('main.wine.slogan')}
                            </h1>
                            <div className={styles.imageWrapper}>
                                {/*<img*/}
                                {/*    key={activeIndex}*/}
                                {/*    loading="lazy"*/}
                                {/*    src={menuItems[activeIndex].image}*/}
                                {/*    alt=""*/}
                                {/*    className={`${styles.activeImage} ${isAnimating ? styles.fadeIn : ""}`}*/}
                                {/*/>*/}
                            </div>
                        </section>
                        <aside className={styles.rightColumn}>
                            <Menu
                                menuItems={menuItems}
                                onMenuClick={handleMenuClick}
                                activeIndex={activeIndex}
                            />
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductionWineComponent;
