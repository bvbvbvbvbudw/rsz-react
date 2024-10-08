import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <div className={styles.pagination}>
            <button
                className={`${styles.paginationDot} ${currentPage === 1 ? styles.active : ''}`}
                aria-label="Page 1"
                onClick={() => onPageChange(1)}
            ></button>
            <button
                className={`${styles.paginationDot} ${currentPage === 2 ? styles.active : ''}`}
                aria-label="Page 2"
                onClick={() => onPageChange(2)}
            ></button>
        </div>
    );
};

export default Pagination;
