import React from 'react';
import styles from './Advanteges.module.css';

const advantagesList = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/abdb1b5728a2a45e735fa332357b99c40c08cccdcb884200da76613739f6ebb7?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
        text: "Ми достатньо швидко інтегруємось у нові проекти, забезпечуючи ефективну співпрацю з партнерами."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5101a44b863de28a04956b2403acacee3599a504c6b571b3b89bec6f2fad8f28?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
        text: "Ми завжди знаходимо компроміс з кожним покупцем, враховуючи їхні потреби та побажання."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1af871dd8fa77c6f4771831cfaeb1661483c039e27cffe057b656e9f90a01f3?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27",
        text: "Виконання своїх зобов'язань по забезпеченню продукцією стоїть на першому місці, навіть за умов форс-мажорних обставин."
    }
];

const AdvantagesList = () => {
    return (
        <div className={styles.advantagesList}>
            {advantagesList.map((advantage, index) => (
                <div key={index} className={styles.advantageItem}>
                    <img src={advantage.icon} alt="Icon" className={styles.icon} />
                    <p>{advantage.text}</p>
                </div>
            ))}
        </div>
    );
};

export default AdvantagesList;
