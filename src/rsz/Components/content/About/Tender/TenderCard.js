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
        </article>
    );
}

export default TenderCard;