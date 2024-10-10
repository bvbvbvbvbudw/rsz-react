import React from 'react';
import styles from './Pagination.module.css';

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <button className={styles.paginationButton} aria-label="Previous page">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/13dda64488f9be743bfd2c0a422ea960cccd27925e73cb1427c0a257ca5e1d0b?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.paginationIcon} />
            </button>
            <button className={styles.paginationButton} aria-label="Next page">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eca4e093f337567ca8cfec1a1603b9e908f5b1d524f094c2f2503e146c877a0?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.paginationIcon} />
            </button>
        </div>
    );
};

export default Pagination;