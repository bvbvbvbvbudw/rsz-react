import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import styles from './ProductSpecs.module.css';

// icons
import pallet1 from '../../../assets/icons/pallet_1.png';
import pallet2 from '../../../assets/icons/pallet_2.png';
import pallet3 from '../../../assets/icons/pallet_3.png';
import pallet4 from '../../../assets/icons/balance.png';
import pallet5 from '../../../assets/icons/bottles.png';

function ProductSpecs() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('specs');

    const specs = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1da407643e4214479128a16bc4ff369eebd1729fd15c242567e417b527c07fb?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: t('product.spec.capacity.label'), values: [{ key: t('product.nominal'), value: `330 ${t('filters.mm')}` }, { key: t('product.full'), value: `350 ${t('filters.mm')}` }] },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c6d7ef629af89e306465fe7eab8e3f81d332799a2aef906af00ac07b026037?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: t('product.spec.height.label'), value: `238 ${t('filters.mm')}` },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/30d5cd743e299fb10462ea464766d43cdaa982668a91fae3bef5759595de20c8?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: t('product.spec.diameter.label'), value: `61 ${t('filters.mm')}` },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dead06ab86087ab7450e67ca1ae008e59763d44d3b9ca96e0d3e83b0adaad300?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: t('product.spec.weight.label'), value: `300 ${t('filters.kg')}` },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/898f82eedcc8c8bb96f61ac46d2b246a18bba4b65d3d3883297b7dcd83650122?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: t('product.spec.glassColor.label'), value: t('product.greenBrown') },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/088e0863988dcf28b83930b6b98387c88b0b1df22a3fb85f99f12e3e56947fb0?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: t('product.spec.corkType.label'), value: t('product.crownCap') },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d923be3c51f0db9ef45eadc2ff64350d6c62619e5c74fde4ded955d1185622ef?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27", label: t('product.spec.circulationType.label'), value: t('product.recirculating') }
    ];

    const packaging = [
        { icon: pallet1, label: t('product.pack.bottlesPerPallet.label'), value: "2376" },
        { icon: pallet2, label: t('product.pack.rowsPerPallet.label'), value: "9" },
        { icon: pallet5, label: t('product.pack.bottlesPerRow.label'), value: "264" },
        { icon: pallet4, label: t('product.pack.palletWeight.label'), value: `776 ${t('filters.kg')}` },
        { icon: pallet3, label: t('product.pack.palletSize.label'), value: `1200x1000x2212 ${t('filters.mm')}` }
    ];

    return (
        <section className={styles.productSpecs}>
            <nav className={styles.specsTabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'specs' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('specs')}
                >
                    {t('product.specifications')}
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'packaging' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('packaging')}
                >
                    {t('product.packaging')}
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
