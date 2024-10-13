import React from 'react';
import styles from './ArticleHeader.module.css';

const ArticleHeader = () => {
    return (
        <header className={styles.articleHeader}>
            <button className={styles.backButton} aria-label="Go back">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bcc6dfc840b44cd1a6f5f09e135a898d5fe40638586120a4725b77eba2eb098?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.backIcon} />
            </button>
            <div className={styles.titleContainer}>
                <h2 className={styles.articleTitle}>Повідомлення про дистанціне проведення позачергових Загальних зборів акціонерів Приватного акціонерного товариства «Рокитнівський скляний завод</h2>
                <p className={styles.articleMeta}>Опубліковано 11.08.2023 автором Admin</p>
            </div>
            <button className={styles.shareButton} aria-label="Share">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a76e435436f9b76670707faed376b574c9445bbc302452d83a66ea2204f8665?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.shareIcon} />
            </button>
        </header>
    );
};

export default ArticleHeader;