import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = () => {
    return (
        <div className={styles.imageGallery}>
            <div className={styles.imageWrapper}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3720a7ca3b9b4608634d6396e335f306f7fb7b7e84d2032ccc39d48e25e3996c?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                    alt="" className={styles.logoBackground}/>
            </div>
        </div>
    );
};

export default ImageGallery;