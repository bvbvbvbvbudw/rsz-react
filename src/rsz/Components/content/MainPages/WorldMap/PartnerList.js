import React from 'react';
import styles from './PartnerList.module.css';

const partners = [
    { name: 'Голландія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9e19ae2578ed0f84a38415cf7504dffc6ea3d03a2d421991fb03db01e8f06df2?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Швеція', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ad0b78704330067ae88967426f418106d781d2dc2373eb717d0099cebce9f18?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Латвія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/599c3097c2d514630efd62a59222a141fb7a23f840d2341fde4a403a326ca13d?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Італія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/240b37cc92dd2e72e890d502dd27fb7c36e7e8a12aa9e4d2b3a23858b1a8cf05?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Бельгія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/03f8a94165660746fff150b79827228c2d24b8a00b009a96bbf445b8d14ba3a6?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Норвегія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c28e65897ea4ba886dfdb301179f69693c4d58ba17f98c028caa7f4896521267?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Румунія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ff23cda459976ebdf8be839750a307a8e2f543e20c71e7f60ae0fb413068975?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Іспанія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/edea4970f56ad5edfc2209a301254bdb92e2c83ce32fc7af532b78c197c1d674?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Франція', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90633161acc9b41de410dbe82b12cdff7b25e93a93c6d3f9333bf58e319c0566?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Естонія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2741ba0388e9e15fd99a924a8677c0ccf18610da2a454650096adc612b5d16da?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Фінляндія', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c4f6019fdc01748102fb69d2950c12d600fa749cb56c4860690a7eea41ee5906?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'Литва', flag: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c4e08b4dd23539a30a9c485a40b4b7dbed7130231dd26fb40b4c93d694c1d387?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
];

const PartnerList = () => {
    return (
        <div className={styles.partnerList}>
            <h2 className={styles.partnerListTitle}>Серед наших партнерів є такі країни, як:</h2>
            <ul className={styles.partnerGrid}>
                {partners.map((partner, index) => (
                    <li key={index} className={styles.partnerItem}>
                        <img src={partner.flag} alt={`Flag of ${partner.name}`} className={styles.partnerFlag} />
                        <span className={styles.partnerName}>{partner.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PartnerList;