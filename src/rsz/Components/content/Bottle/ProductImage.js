import React, { useState } from 'react';
import styles from './ProductImage.module.css';

function ProductImage() {
    const [selectedImage, setSelectedImage] = useState(
        "https://cdn.builder.io/api/v1/image/assets/TEMP/753eb2fa0f621c7ba2bdec5b8cee0715292293338c5508f92aedfe09c750adc7?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
    );

    const images = [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/753eb2fa0f621c7ba2bdec5b8cee0715292293338c5508f92aedfe09c750adc7?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3c3ab79b8119f31d19a1edde25036d912bba4aea3f0cf4da67f98acf7ca84f72?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <section className={styles.productImageSection}>
            <div className={styles.imageContainer}>
                <img
                    src={selectedImage}
                    alt="Selected wine bottle"
                    className={styles.productImage}
                />
            </div>
            <div className={styles.imageControls}>
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={styles.controlButton}
                        onClick={() => handleImageClick(image)}
                        aria-label={`Select image ${index + 1}`}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={styles.controlIcon}
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}

export default ProductImage;
