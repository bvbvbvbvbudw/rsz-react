import React from 'react';
import styles from './CompanyInfo.module.css';

const CompanyInfo = () => {
    return (
        <section className={styles.companyInfo}>
            <div className={styles.textContent}>
                <p className={styles.leadParagraph}>
                    Одним із провідних виробників української склотарної галузі є ПрАТ «Рокитнівський скляний завод», який веде свою історію з 1898 року.
                </p>
                <p className={styles.description}>
                    Нашим підприємством розробляються форми пляшок за побажаннями та запитами клієнтів. Товариство спеціалізується на виробництві пляшок в зеленому та коричневому кольорах скла місткістю від 0,2 до 1,0 літра.
                    <br />
                    Завод має в активі близько 50 власних розробок пляшок та виробляє склотару для пива, лікеро-горілчаних, винних, коньячних, слабоалкогольних, безалкогольних та сокових напоїв.
                </p>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f03e8ce87a5c7fe32086d7c5f3c97eff9ca5eada9c8a08146d94ab4656699a4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Рокитнівський скляний завод factory" className={styles.factoryImage} />
        </section>
    );
};

export default CompanyInfo;