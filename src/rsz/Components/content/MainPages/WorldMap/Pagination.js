import React from 'react';
import styles from './Pagination.module.css';

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <button className={`${styles.paginationDot} ${styles.active}`} aria-label="Page 1"></button>
            <button className={styles.paginationDot} aria-label="Page 2"></button>
        </div>
    );
};

export default Pagination;