import React from 'react';
import styles from '../../assets/css/GlassFactory.module.css';

function Header() {
    const navItems = [
        { label: 'Головна', active: true },
        { label: 'Про нас', active: false },
        { label: 'Продукція', active: false },
        { label: 'Акціонерам', active: false },
        { label: 'Контакти', active: false },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e19ae2578ed0f84a38415cf7504dffc6ea3d03a2d421991fb03db01e8f06df2?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                    className={styles.logoImage}
                    alt="Рокитнівський скляний завод logo"
                />
                <div className={styles.companyName}>
                    Рокитнівський скляний завод
                </div>
            </div>
            <nav className={styles.navigation}>
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className={item.active ? styles.activeNavItem : styles.navItem}
                    >
                        <div className={styles.navItemBase}>{item.label}</div>
                    </a>
                ))}
            </nav>
            <button className={styles.languageButton}>
                <div className={styles.languageButtonContent}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33a79b7feff5a9a7a9fade78ccad0c1ea99a310d33d0eb014af10fe060c2f077?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                        className={styles.languageIcon}
                        alt=""
                    />
                    <span className={styles.languageText}>МОВА</span>
                </div>
            </button>
        </header>
    );
}

export default Header;