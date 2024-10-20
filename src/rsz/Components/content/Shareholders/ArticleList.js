import React from 'react';
import ArticleCard from './ArticleCard';
import styles from './ArticleList.module.css';
import { useTranslation } from 'react-i18next';

const ArticleList = () => {
    const { t } = useTranslation();

    const articles = [
        {
            title: t('shareholders.articles.offer.title'),
            date: '20.10.2023',
            content: t('shareholders.articles.offer.content'),
            url: "/shareholders/test",
        },
        {
            title: t('shareholders.articles.acquisition.title'),
            date: '29.09.2023',
            content: t('shareholders.articles.acquisition.content'),
            url: "/shareholders/test",
        },
    ];

    return (
        <div className={styles.articleList}>
            {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
            ))}
        </div>
    );
};

export default ArticleList;
