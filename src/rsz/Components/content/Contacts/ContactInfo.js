import React from 'react';
import styles from './ContactInfo.module.css';

function ContactInfo() {
    const contactSections = [
        {
            title: 'Приймальня',
            items: [
                { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5771e46f13cadedb4b921982fa31eb38eb7f85eba9c2415342dcdbda3f36512f?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27', text: '+38 (067) 362-48-26', type: 'phone' },
                { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34d9ed5827ee56f45b5e832bf9e242defa9e39b93609aac5d04b2641bbd803d3?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27', text: 'rsz@rsz.rovno.ua', type: 'email' }
            ]
        },
        {
            title: 'Адреса:',
            items: [
                { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/78176ce6d64465b17000fbfa6e4ae7144c93d8ebccc6ef565dd2a252fb3ef04a?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27', text: '34200, Україна, Рівненська обл., смт. Рокитне, вул. Патріотична, 18', type: 'address' }
            ]
        },
        {
            title: 'Відділ збуту готової продукції',
            items: [
                { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34d9ed5827ee56f45b5e832bf9e242defa9e39b93609aac5d04b2641bbd803d3?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27', text: 'svitlana.retivova@rsz.com.ua', type: 'email' }
            ]
        },
        {
            title: 'Відділ матеріально-технічного постачання',
            items: [
                { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34d9ed5827ee56f45b5e832bf9e242defa9e39b93609aac5d04b2641bbd803d3?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27', text: 'yuliia.martyniuk@rsz.rovno.ua', type: 'email' }
            ]
        }
    ];

    return (
        <section className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Контакти</h2>
            {contactSections.map((section, index) => (
                <div key={index} className={styles.infoSection}>
                    <h3 className={styles.sectionSubtitle}>{section.title}</h3>
                    {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className={styles.contactItem}>
                            <img src={item.icon} alt="" className={styles.contactIcon} />
                            {item.type === 'phone' && <a href={`tel:${item.text.replace(/\s/g, '')}`} className={styles.contactText}>{item.text}</a>}
                            {item.type === 'email' && <a href={`mailto:${item.text}`} className={styles.contactText}>{item.text}</a>}
                            {item.type === 'address' && <address className={styles.contactText}>{item.text}</address>}
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
}

export default ContactInfo;