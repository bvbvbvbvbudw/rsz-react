import React from 'react';
import TenderCard from './TenderCard';
import styles from './TenderSection.module.css';

const tenderData = [
    {
        year: 2022,
        title: 'Аудит фінансової звітності ПрАТ «РСЗ» за 2022 рік',
        links: [
            { text: 'Інформаційне повідомлення 2022', url: '#' },
            { text: 'Тендерна документація 2022', url: '#' },
            { text: 'Порядок проведення Конкурсу 2022', url: '#' },
            { text: 'Протоколи Наглядової ради Товариства', url: '#' },
            { text: 'Повідомлення про завершення Конкурсу 2022', url: '#' }
        ],
        additionalInfo: 'Річна фінансова звітність Товариства за 2022 рік'
    },
    {
        year: 2021,
        title: 'Аудит фінансової звітності ПрАТ «РСЗ» за 2021 рік',
        links: [
            { text: 'Інформаційне повідомлення 2021', url: '#' },
            { text: 'Тендерна документація 2021', url: '#' },
            { text: 'Порядок проведення Конкурсу 2021', url: '#' },
            { text: 'Повідомлення про завершення Конкурсу 2021', url: '#' }
        ],
        additionalInfo: 'Річна фінансова звітність Товариства за 2021 рік'
    },
    {
        year: 2020,
        title: 'Аудит фінансової звітності ПрАТ «РСЗ» за 2020 рік',
        links: [
            { text: 'Інформаційне повідомлення 2020', url: '#' },
            { text: 'Тендерна документація 2020', url: '#' },
            { text: 'Повідомлення про завершення Конкурсу 2020', url: '#' }
        ],
        additionalInfo: 'Річна фінансова звітність Товариства за 2020 рік.'
    },
    {
        year: 2019,
        title: 'Аудит фінансової звітності ПрАТ «РСЗ» за 2019 рік',
        links: [
            { text: 'Інформаційне повідомлення 2019', url: '#' },
            { text: 'Порядок проведення Конкурсу 2019', url: '#' },
            { text: 'Тендерна документація 2019', url: '#' },
            { text: 'Повідомлення про завершення Конкурсу 2019', url: '#' }
        ]
    }
];

function TenderSection() {
    return (
        <section className={styles.tenderSection}>
            <a href="#" className={styles.instructionLink}>Інструкція для учасників</a>
            <h2 className={styles.sectionTitle}>Конкурс з відбору суб'єктів аудиторської діяльності:</h2>
            <div className={styles.tenderGrid}>
                {tenderData.map((tender, index) => (
                    <TenderCard key={index} {...tender} />
                ))}
            </div>
        </section>
    );
}

export default TenderSection;