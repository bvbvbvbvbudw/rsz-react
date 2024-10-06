import React from 'react';
import styles from '../../assets/css/Footer.module.css';
import NavButton from './NavButton';
import ContactItem from './ContactItem';

const navItems = [
    ['Головна', 'Про нас', 'Продукція'],
    ['Історія розвитку', 'Акціонерам', 'Контакти']
];

const contactItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eabedff6f6b3c0b928b5469b5b8f978e1bc5890e165a313d695f7ee87c1b3fa0?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27', text: '+38 (067) 362-48-26' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/41f7f19002bfb2d315dd7894199230499e0faf01d9c0b63be08ec28c27e27837?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27', text: 'snizhana.pochtar@rsz.rovno.ua' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/474602035c43d25d75a25dc4936fee10580ab7ad4c4d94d7db1cc8981ff36a8c?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27', text: '34200, Україна, Рівненська обл., смт. Рокитне, вул. Патріотична, 18', isAddress: true }
];

const Footer = () => (
    <footer style={{position: 'relative'}} className={styles.footer}>
        <nav className={styles.navGroup}>
            {navItems.map((column, columnIndex) => (
                <div key={columnIndex} className={styles.navColumn}>
                    {column.map((item, itemIndex) => (
                        <NavButton key={itemIndex} text={item} />
                    ))}
                </div>
            ))}
        </nav>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0f3d76f4211d287f57ade2a022dd26bfe06ed92c3ecb40af89c3b1cf13cca04?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Company Logo" className={styles.logo} />
        <div className={styles.contactInfo}>
            {contactItems.map((item, index) => (
                <ContactItem key={index} {...item} />
            ))}
        </div>
    </footer>
);

export default Footer;