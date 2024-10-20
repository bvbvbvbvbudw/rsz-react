import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProductionInfo.module.css';

const ProductionInfo = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.productionInfo}>
            <h2 className={styles.sectionTitle}>{t('product.title')}</h2>
            <div className={styles.contentWrapper}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba54e7a8d6da2833c6d17af42b567565b10280774f3e9a33ef304495947327a8?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt={t('product.factoryImageAlt')} className={styles.productionImage} />
                <div className={styles.textContent}>
                    <p className={styles.highlight}>
                        {t('product.highlight')}
                    </p>
                    <p>
                        {t('product.description1')}
                    </p>
                    <p>
                        {t('product.description2')}
                    </p>
                    <p>
                        <strong>{t('product.qualityTitle')}</strong> – {t('product.qualityDescription')}
                    </p>
                    <p>
                        <strong>{t('product.timelinessTitle')}</strong> – {t('product.timelinessDescription')}
                    </p>
                    <p>
                        {t('product.improvement')}
                    </p>
                    <p>
                        {t('product.experience')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductionInfo;
