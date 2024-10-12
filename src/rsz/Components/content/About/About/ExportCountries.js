import React from 'react';
import styles from './ExportCountries.module.css';

const countries = [
    { name: 'Голландія', flag: 'flagOfTheNetherlands1' },
    { name: 'Швеція', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1e4607a09354f7c9cf5dcf6a4ba8621728a78ec5e19648cc931bcf9da603a00c?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Латвія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2d1d673cf3740501100d03d6ce145ec6bc41a721d133e5b438c633a4c6aa9edd?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Італія', flag: 'flagOfItaly1' },
    { name: 'Бельгія', flag: 'flagOfBelgium1' },
    { name: 'Норвегія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/caf391c87f94b2d5b3e5d97a602677cedd5d980b7cf50760a356598d1e030fdf?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Румунія', flag: 'flagOfRomania1' },
    { name: 'Іспанія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4b2057575a2fbd2c84b0043dfe9dfee2fb53a682398376d3a0eca90c2fa52838?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Франція', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13c3af4838c049062552bda0e911116abdb4a18f1512db75af38c0b15f4924f6?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Естонія', flag: 'flagOfEstonia1' },
    { name: 'Фінляндія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07ebf1a4896632cd0fc9b1c3126145c1b64406e8244ea8c415a9928558afe30e?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Литва', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a76e0883cff07d03bbe9a6470ecc7fff3671aba122f205befb19acd732c29fbc?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
];

const ExportCountries = () => {
    return (
        <section className={styles.exportCountries}>
            <h2 className={styles.sectionTitle}>
                Продукція заводу відповідає європейським стандартам якості і експортується за кордон:
            </h2>
            <ul className={styles.countryGrid}>
                {countries.map((country, index) => (
                    <li key={index} className={styles.countryItem}>
                        {country.flag.startsWith('http') ? (
                            <img src={country.flag} alt={`${country.name} flag`} className={styles.countryFlag} />
                        ) : (
                            <div className={`${styles.countryFlag} ${styles[country.flag]}`} aria-hidden="true" />
                        )}
                        <span className={styles.countryName}>{country.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ExportCountries;