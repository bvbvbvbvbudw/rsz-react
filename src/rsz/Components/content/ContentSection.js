import React from 'react';
import styles from '../../assets/css/GlassComponent.module.css';

const ContentSection = () => {
    return (
        <section className={styles.contentSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.sectionTitle}>Чому скло?</h2>
                <div className={styles.textContainer}>
                    <div className={styles.textColumn}>
                        <div className={styles.verticalLine} />
                        <p className={styles.textContent}>
                            Насамперед скло є ідеальним матеріалом для зберігання напоїв, оскільки воно не взаємодіє з їхнім складом, зберігаючи в такий спосіб неперевершений смак і якість напою впродовж усього терміну зберігання.
                        </p>
                    </div>
                    <div className={styles.textColumn}>
                        <div className={styles.verticalLine} />
                        <p className={styles.textContent}>
                            Крім того, скло має високий ступінь перероблюваності та екологічної чистоти. На відміну від пластику, яким часто виготовляють пакувальні матеріали, скло можна повністю переробляти без втрати його якості. Це допомагає знизити негативний вплив на навколишнє середовище і сприяє сталому розвитку виробництва.
                        </p>
                    </div>
                </div>
            </div>
            <p className={styles.slogan}>
                Зберігаємо неповторний смак кожному виробнику!
            </p>
        </section>
    );
};

export default ContentSection;