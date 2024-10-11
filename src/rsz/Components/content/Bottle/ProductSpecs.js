import React, { useState } from 'react';
import styles from './ProductSpecs.module.css';

function ProductSpecs() {
    const [activeTab, setActiveTab] = useState('specs');

    const specs = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1da407643e4214479128a16bc4ff369eebd1729fd15c242567e417b527c07fb?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: "Місткість", values: [{ key: "Номінальна:", value: "330 мл." }, { key: "Повна:", value: "350 мл." }] },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c6d7ef629af89e306465fe7eab8e3f81d332799a2aef906af00ac07b026037?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: "Висота:", value: "238 мм." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/30d5cd743e299fb10462ea464766d43cdaa982668a91fae3bef5759595de20c8?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: "Діаметер:", value: "61 мм." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dead06ab86087ab7450e67ca1ae008e59763d44d3b9ca96e0d3e83b0adaad300?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: "Вага:", value: "300 г." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/898f82eedcc8c8bb96f61ac46d2b246a18bba4b65d3d3883297b7dcd83650122?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: "Колір скла:", value: "Зелений/Коричневий" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/088e0863988dcf28b83930b6b98387c88b0b1df22a3fb85f99f12e3e56947fb0?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: "Тип вінчика:", value: "Кроненпробка (КК1002)" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d923be3c51f0db9ef45eadc2ff64350d6c62619e5c74fde4ded955d1185622ef?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: "Тип циркуляції:", value: "Оборотна" }
    ];

    const packaging = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/packaging1", label: "Кількість пляшки в палеті:", value: "2376" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/packaging2", label: "Кількість рядів в палеті:", value: "9" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/packaging3", label: "Кількість пляшки в ряді:", value: "264" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/packaging4", label: "Вага палета:", value: "776 кг." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/packaging5", label: "Розміри палету:", value: "1200x1000x2212 мм." }
    ];

    return (
        <section className={styles.productSpecs}>
            <nav className={styles.specsTabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'specs' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('specs')}
                >
                    Характеристики
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'packaging' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('packaging')}
                >
                    Пакування
                </button>
            </nav>

            <div className={`${styles.content} ${activeTab === 'specs' ? styles.visible : ''}`}>
                <table className={styles.specsTable}>
                    <tbody>
                    {specs.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                            <th scope="row" className={styles.specLabel}>
                                <img src={spec.icon} alt="" className={styles.specIcon} />
                                {spec.label}
                            </th>
                            <td className={styles.specValue}>
                                {Array.isArray(spec.values) ? (
                                    spec.values.map((item, i) => (
                                        <div key={i}>
                                            <span className={styles.subLabel}>{item.key}</span> {item.value}
                                        </div>
                                    ))
                                ) : (
                                    spec.value
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className={`${styles.content} ${activeTab === 'packaging' ? styles.visible : ''}`}>
                <table className={styles.specsTable}>
                    <tbody>
                    {packaging.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                            <th scope="row" className={styles.specLabel}>
                                <img src={item.icon} alt="" className={styles.specIcon} />
                                {item.label}
                            </th>
                            <td className={styles.specValue}>
                                {item.value}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ProductSpecs;
