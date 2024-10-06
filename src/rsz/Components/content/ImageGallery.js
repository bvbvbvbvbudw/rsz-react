import React from 'react';
import styles from '../../assets/css/ImageGallery.module.css';

const ImageGallery = () => {
    return (
        <div className={styles.imageGallery}>
            <div className={styles.imageWrapper}>
                {/*<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/de706be3a6b7f9ef4201a39d970fbdd7ac61dc73192978ad6712e9db5c38f380?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Factory exterior" className={styles.backgroundImage} />*/}
                {/*<div className={styles.overlayWrapper}>*/}
                {/*    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2741ba0388e9e15fd99a924a8677c0ccf18610da2a454650096adc612b5d16da?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Factory interior" className={styles.overlayImage} />*/}
                {/*    <div className={styles.logoOverlay}>*/}
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3720a7ca3b9b4608634d6396e335f306f7fb7b7e84d2032ccc39d48e25e3996c?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.logoBackground} />
                {/*        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6213cdf9215ceffeee5bf44a967d289fe9f439db57d911504d876b26cd80f1e4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Company logo" className={styles.logoImage} />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ImageGallery;