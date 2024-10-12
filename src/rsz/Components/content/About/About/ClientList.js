import React from 'react';
import styles from './ClientList.module.css';

const clients = [
    { name: 'ПАТ «Карлсберг»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bfa3cf671977cceb82b98f0bc15bcedc282ad8685ce1a890222efddd8993b7c5?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ПАТ «Оболонь»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bd8b623b63a535c1c46f14c376b07856e196c1e2fb2a83aad7bd2ff2cef35eb9?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ТОВ ТВК «Перша Приватна Броварня «Для людей – як для себе»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b5f5b3e7dde575c0af6503ac0b4e9761a12c7735ed1f6dadbc910f6943856ab7?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ПАТ «ПБК «Радомишь»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f03e05a4d49949ac02113fa67b6f5a007b1eebcbdb51d6a128b7371b3fdfb323?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ТОВ «Полтавпиво»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c5b3a9759e476d60ecef780811d9ff081652bfb1f9dc4a2a6dd5533e0cf23697?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ТзОВ «Бердичівський пивоварний завод»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0b6ee33ba730df9da6f86119d0262a62be023fba870d780eb1d774f4d7d64784?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ПАТ «Хмельницький обласний пивзавод»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb6d6a4038d7b0c257a3d7ce7111aa328c5afd2741b9737dbd2939d868dbe55c?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ТОВ «Рівень»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e54d0392aa265a190fc4bba9f2a869a4c8d9baae8098b7080f961468af3988c0?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ТзОВ «Павлівський пивзавод»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66f2b34d93ad4cd6c564729762e47418b5940fca09a5f7e3e01b22ad7be888a4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ТОВ «Лисичанський пивоварний завод»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed1e22022baa7af8e468961dcdb5f08b056a553a815e47da41406ed394e70805?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ТМ «Моршинська»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/748da08dbcd16738038e35215d1012d9a48aaa6978b60d32f25eb80caa449077?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
    { name: 'ТОВ «Аква-Поляна»', logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0df3013bf7f9e70e9c3e7daffceddddb19795a9543ff44e461cb3f9c9cc75db0?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
];

const ClientList = () => {
    return (
        <section className={styles.clientList}>
            <div className={styles.title}>
                <h2 className={styles.sectionTitle}>
                    Основними споживачами продукції підприємства є такі відомі компанії і бренди:
                </h2>
                <button className={styles.showMoreButton}>
                    більше
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9e01e90d2ddbf40ac5c6a04ef4454ee14369856106f42c4753d34144ad784b?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.arrowIcon} />
                </button>
            </div>
            <ul className={styles.clientGrid}>
                {clients.map((client, index) => (
                    <li key={index} className={styles.clientItem}>
                        <img src={client.logo} alt={`${client.name} logo`} className={styles.clientLogo} />
                        <span className={styles.clientName}>{client.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ClientList;