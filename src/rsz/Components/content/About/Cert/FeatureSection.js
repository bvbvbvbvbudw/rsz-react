import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
    const features = [
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c6fd1f60ca5bfda87428acad82c249d7ef474fd58d08e79aeb6da59feabafa5?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
            title: "Якість продукції",
            description: "Рух до поліпшення споживчих властивостей є переважним напрямком руху до мети."
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a938890efa84fd4b3e9d4da0a94ea7ad92fc78eae015e46b0c11e3e480ffd281?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
            title: "Точне виконання",
            description: "У нас можна пройти шлях від першого звернення до отримання дослідних зразків нової продукції найшвидше."
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/200960600c6c496505294bf27fd87d2b8ca02c13aa5a311d531fae94e9ad2d62?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
            title: "Вдосконалення технологій",
            description: "Забезпечуємо можливість виробництва продукції вищої якості при дотриманні балансу вартості."
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/833e206433b80e0bf229169ac24ca871cb51635f60810e05e9bf56a5a61f1a91?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
            title: "Віковий досвід",
            description: "Збереження і вдосконалення традицій забезпечують якість, затребувану в усьому світі."
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