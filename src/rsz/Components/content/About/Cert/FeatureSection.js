import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './FeatureSection.module.css';
import { useTranslation } from 'react-i18next';

const FeatureSection = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c6fd1f60ca5bfda87428acad82c249d7ef474fd58d08e79aeb6da59feabafa5?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
            title: t('about.second.features.quality.title'),
            description: t('about.second.features.quality.description')
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a938890efa84fd4b3e9d4da0a94ea7ad92fc78eae015e46b0c11e3e480ffd281?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
            title: t('about.second.features.precision.title'),
            description: t('about.second.features.precision.description')
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/200960600c6c496505294bf27fd87d2b8ca02c13aa5a311d531fae94e9ad2d62?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
            title: t('about.second.features.technology.title'),
            description: t('about.second.features.technology.description')
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/833e206433b80e0bf229169ac24ca871cb51635f60810e05e9bf56a5a61f1a91?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
            title: t('about.second.features.experience.title'),
            description: t('about.second.features.experience.description')
        }
    ];

    return (
        <section className={styles.featureSection}>
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </section>
    );
};

export default FeatureSection;
