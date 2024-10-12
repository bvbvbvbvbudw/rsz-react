import React from 'react';
import styles from './TenderCard.module.css';

function TenderCard({ year, title, links, additionalInfo }) {
    return (
        <article className={styles.tenderCard}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <hr className={styles.divider} />
            <ul className={styles.linkList}>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className={styles.tenderLink}>{link.text}</a>
                    </li>
                ))}
            </ul>
            {additionalInfo && <p className={styles.additionalInfo}>{additionalInfo}</p>}
            {year === 2022 && (
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7a83d7b74ac39b88272afebecf9cd1ce8fa799823b8acf44e75aca282a12?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.decorativeImage} />
            )}
        </article>
    );
}

export default TenderCard;