import React, { useState } from 'react';
import styles from './CertificationInfo.module.css';
import { useTranslation } from "react-i18next";

const CertificationInfo = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            handleCloseModal();
        }
    };

    return (
        <section className={styles.certificationInfo}>
            <h1 className={styles.title}>{t('about.second.info.title')}</h1>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h2 className={styles.subtitle}>ISO 9001:2015; FSSC 22000 (v.5.1).</h2>
                    <p className={styles.description}>{t('about.second.info.description')}</p>
                </div>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a396c215220a2ee37c417961b63f8302c2477b48d218f958c1a7d6fcaec5a22?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                    alt={t('about.second.info.certificate')}
                    className={styles.certificateImage}
                    onClick={handleImageClick}
                />
            </div>
            <div className={styles.additionalInfo}>
                <div className={styles.textContent}>
                    <h2 className={styles.subtitle}>
                        {t('about.second.info.subtitle')}
                    </h2>
                    <p className={styles.description}>
                        {t('about.second.info.isuabvs')}
                    </p>
                    <p className={styles.description}>
                        {t('about.second.info.structure')}
                    </p>
                </div>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a396c215220a2ee37c417961b63f8302c2477b48d218f958c1a7d6fcaec5a22?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                    alt={t('about.second.info.certificate')}
                    className={styles.certificateImage}
                    onClick={handleImageClick}
                />
            </div>

            {isModalOpen && (
                <div className={styles.overlay} onClick={handleOverlayClick}>
                    <div className={styles.modalContent}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a396c215220a2ee37c417961b63f8302c2477b48d218f958c1a7d6fcaec5a22?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                            alt={t('about.second.info.certificate')}
                            className={styles.modalImage}
                        />
                        <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CertificationInfo;
