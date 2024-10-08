import React from 'react';
import styles from './ProductionInfo.module.css';

const ProductionInfo = () => {
    return (
        <section className={styles.productionInfo}>
            <h2 className={styles.sectionTitle}>Продукція нашого виробництва</h2>
            <div className={styles.contentWrapper}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba54e7a8d6da2833c6d17af42b567565b10280774f3e9a33ef304495947327a8?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Factory production line" className={styles.productionImage} />
                <div className={styles.textContent}>
                    <p className={styles.highlight}>
                        Підприємство спеціалізується на виробництві ексклюзивної склотари, яку потребує сучасний споживач.
                    </p>
                    <p>
                        Продукція заводу відповідає європейським стандартам якості і здатна задовольнити найвибагливіші смаки. Нашим підприємством розробляються форми пляшок за побажаннями та запитами клієнтів.
                    </p>
                    <p>
                        Товариство спеціалізується на виробництві пляшок в зеленому та коричневому кольорі скла місткістю від 0,2 до 1,0 літра. ПрАТ "Рокитнівський скляний завод" має в активі близько 50 власних розробок пляшок.
                    </p>
                    <p>
                        <strong>Якість продукції</strong> – вищий пріоритет діяльності! На цьому постулаті базується робота всього підприємства. Рух до поліпшення споживчих властивостей є переважним напрямком руху до мети.
                    </p>
                    <p>
                        <strong>Найбільш точне виконання побажань покупців у найкоротші терміни</strong> – це важлива ознака, за якою обирають наше підприємство. Тільки у нас можна пройти шлях від першого звернення до отримання дослідних зразків нової продукції за три дні.
                    </p>
                    <p>
                        Прагнення до постійного вдосконалення технологій забезпечує можливість виробництва продукції вищої якості при дотриманні балансу вартості. Це – основа розвитку і впевненості в завтрашньому дні.
                    </p>
                    <p>
                        Віковий досвід підприємства, збереження і вдосконалення традицій, підтверджених роботою трудових династій колективу, забезпечують якість, затребувану в усьому світі.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductionInfo;