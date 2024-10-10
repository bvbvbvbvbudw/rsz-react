import React from 'react';
import styles from './Breadcrumbs.module.css';

function Breadcrumbs() {
    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <a href="#" className={styles.breadcrumbLink}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a95047ce807e37f9aacbdf11ea0f43e74e3584e8e1469bace79642995606f8e?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Home" className={styles.homeIcon} />
            </a>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/71b13e494834a0b4b0bf6b6453f068fdebea75a77140057c58729858e974555f?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.separator} />
            <a href="#" className={styles.breadcrumbLink}>Продукція</a>
        </nav>
    );
}

export default Breadcrumbs;