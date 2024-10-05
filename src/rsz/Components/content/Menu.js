import React from "react";
import styles from "../../assets/css/Menu.module.css";

const menuItems = [
    { title: "Тара для пива", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d82b446c2e9635b8255d1d82653a9bf444a92f671c97e4b7d775f84c16792b4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" },
    { title: "Тара для вина", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bd1762ac14c9cfc2fbd7da91e8e64c5a52b7e44000b3fe7a15ffecf8f826261?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" },
    { title: "Тара для мінеральної води", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1669f0bc20e60d784579b0ffd8a651f51862c8aedcad771d85433d2250860763?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" },
    { title: "Тара для хiмiчних рiдин", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/50db57235891b84736c3cb47a8644cf8297234c7efec3fd3d27ed737b62e5c0a?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" }
];

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className={styles.menuItem}>
                        <span className={styles.menuTitle}>{item.title}</span>
                        <img
                            loading="lazy"
                            src={item.image}
                            alt=""
                            className={styles.menuIcon}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;