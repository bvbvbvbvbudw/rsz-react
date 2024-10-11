import React from 'react';
import styles from "./GlassComponent.module.css";

import bg from '../../../assets/img/background.png';
import photo from '../../../assets/img/photo.png';

import './style.css';

export default function ThirdPage() {
    return (
        <>
            <div className={styles.glassContainer}>
                <main className={styles.mainContent}>
                    <img
                        loading="lazy"
                        src={bg}
                        className={styles.backgroundImage}
                        alt=""
                    />
                    <div className="container">
                        <img src={photo} className="photo" alt="Photo" />
                        <div className="info">
                            <div className={styles.title}>Нам понад 125 років</div>
                            <p className={styles.topDescription}>
                                Завдяки багаторічному досвіду у галузі скловаріння, вигідному розташуванню кварцових піщаних кар'єрів та систематичному технічному вдосконаленню виробничого процесу, ПрАТ «Рокитнівський скляний завод», який працює з 1898 року, успішно входить у трійку лідерів виробників скляних пляшок в Україні.
                            </p>
                            <div className={styles.bottomWrapper}>
                                <p className={styles.leftSide}>Покриваємо усі ризики</p>
                                <p className={styles.bottomDescription}>
                                    Хоча рідко, але можливі непередбачені обставини, які можуть вплинути на доставку. Навіть у випадку таких ситуацій, ми готові вирішити всі непорозуміння, навіть в умовах виникнення надзвичайних обставин.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
