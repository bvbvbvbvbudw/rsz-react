import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header({ activeItem }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1009);
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false); // Управление отображением меню языков
    const [selectedLanguage, setSelectedLanguage] = useState(''); // Храним выбранный язык

    const navItems = [
        { label: 'Головна', url: "/" },
        { label: 'Про нас', url: "/about" },
        { label: 'Продукція', url: "/products" },
        { label: 'Акціонерам', url: "/shareholders" },
        { label: 'Контакти', url: "/contacts" },
    ];

    // При изменении размера окна скрываем меню на десктопе
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1009);
            if (window.innerWidth > 1009) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Восстанавливаем язык из localStorage
    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            setSelectedLanguage(savedLanguage);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!languageMenuOpen);
    };

    const handleLanguageSelect = (languageCode) => {
        setSelectedLanguage(languageCode);
        localStorage.setItem('selectedLanguage', languageCode);
        setLanguageMenuOpen(false); // Закрываем меню после выбора
    };

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

            {!isMobile && (
                <nav className={styles.navigation}>
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className={item.label === activeItem ? styles.activeNavItem : styles.navItem}
                        >
                            <div className={styles.navItemBase}>{item.label}</div>
                        </a>
                    ))}
                </nav>
            )}

            <div className={styles.cont}>
                <button className={styles.languageButton} onClick={toggleLanguageMenu}>
                    <div className={styles.languageButtonContent}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33a79b7feff5a9a7a9fade78ccad0c1ea99a310d33d0eb014af10fe060c2f077?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                            className={styles.languageIcon}
                            alt="language"
                        />
                        <span className={styles.languageText}>
                            {selectedLanguage || 'МОВА'}
                        </span>
                    </div>
                </button>

                {isMobile && (
                    <button className={styles.hamburger} onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 14" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.75 13C0.75 12.8011 0.829018 12.6103 0.96967 12.4697C1.11032 12.329 1.30109 12.25 1.5 12.25H16.5C16.6989 12.25 16.8897 12.329 17.0303 12.4697C17.171 12.6103 17.25 12.8011 17.25 13C17.25 13.1989 17.171 13.3897 17.0303 13.5303C16.8897 13.671 16.6989 13.75 16.5 13.75H1.5C1.30109 13.75 1.11032 13.671 0.96967 13.5303C0.829018 13.3897 0.75 13.1989 0.75 13ZM0.75 7C0.75 6.80109 0.829018 6.61032 0.96967 6.46967C1.11032 6.32902 1.30109 6.25 1.5 6.25H16.5C16.6989 6.25 16.8897 6.32902 17.0303 6.46967C17.171 6.61032 17.25 6.80109 17.25 7C17.25 7.19891 17.171 7.38968 17.0303 7.53033C16.8897 7.67098 16.6989 7.75 16.5 7.75H1.5C1.30109 7.75 1.11032 7.67098 0.96967 7.53033C0.829018 7.38968 0.75 7.19891 0.75 7ZM0.75 1C0.75 0.801088 0.829018 0.610322 0.96967 0.46967C1.11032 0.329018 1.30109 0.25 1.5 0.25H16.5C16.6989 0.25 16.8897 0.329018 17.0303 0.46967C17.171 0.610322 17.25 0.801088 17.25 1C17.25 1.19891 17.171 1.38968 17.0303 1.53033C16.8897 1.67098 16.6989 1.75 16.5 1.75H1.5C1.30109 1.75 1.11032 1.67098 0.96967 1.53033C0.829018 1.38968 0.75 1.19891 0.75 1Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                )}
            </div>

            {languageMenuOpen && (
                <div className={styles.languageMenu}>
                    <div onClick={() => handleLanguageSelect('UA')}>Українська</div>
                    <div onClick={() => handleLanguageSelect('EN')}>English</div>
                    <div onClick={() => handleLanguageSelect('RU')}>Русский</div>
                </div>
            )}

            {menuOpen && isMobile && (
                <nav className={`${styles.hamburgerMenu} ${menuOpen ? styles.visible : styles.hidden}`}>
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className={item.label === activeItem ? styles.activeNavItem : styles.navItem}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
