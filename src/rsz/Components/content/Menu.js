import React from "react";
import styles from "../../assets/css/Menu.module.css";

const Menu = ({ menuItems, onMenuClick, activeIndex }) => {
    return (
        <nav className={styles.menu}>
            <ul>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`${styles.menuItem} ${activeIndex === index ? styles.active : ""}`}
                        onClick={() => onMenuClick(index)}
                    >
                        <span className={styles.menuTitle}>{item.title}</span>
                        <img
                            loading="lazy"
                            src={item.image}
                            alt=""
                            className={`${styles.menuIcon} ${activeIndex === index ? styles.activeIcon : ""}`}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
