import React from 'react';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ title, date, content, url }) => {
    return (
        <article className={styles.articleCard}>
            <h3 className={styles.articleTitle}>{title}</h3>
            <p className={styles.articleDate}>Опубліковано {date} автором Admin</p>
            <hr className={styles.articleDivider} />
            <p className={styles.articleContent}>{content}</p>
            <button onClick={() => window.location.href = url} className={styles.readMoreButton}>
                Читати повністю
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4c67ece319f5547e1ad8e4df7d973166ca4b8a478a93459ccb527a1a3108a70?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.readMoreIcon} />
            </button>
        </article>
    );
};

export default ArticleCard;