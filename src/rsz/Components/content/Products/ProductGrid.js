import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const productData = [
    {
        title: 'products.beerPackaging',  
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a24a8cf31573ba1bdb8397ba47a2f1f5f08d73a791f4bcf88021739f2c6a814f?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27',
        buttons: [
            { url: "products/test", text: 'products.standardBeerPackaging', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/feeda5f6cc580b4cb3e9d5a3d2132277610f29b3e6ab5add8f314b94d29514c4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
            { url: "products/test", text: 'products.exclusiveBeerPackaging', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/feeda5f6cc580b4cb3e9d5a3d2132277610f29b3e6ab5add8f314b94d29514c4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' }
        ],
    },
    {
        title: 'products.winePackaging',  
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d0512d99cfda10028925b9bd3e82f91333494fa7a4ba3ef78b8f51b2386d3dea?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27',
        buttons: [
            { url: "products/test", text: 'products.standardWinePackaging', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/feeda5f6cc580b4cb3e9d5a3d2132277610f29b3e6ab5add8f314b94d29514c4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
            { url: "products/test", text: 'products.exclusiveWinePackaging', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/feeda5f6cc580b4cb3e9d5a3d2132277610f29b3e6ab5add8f314b94d29514c4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' }
        ],
    },
    {
        title: 'products.chemicalLiquidPackaging',  
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/452b4dde186cf7d5e0ac12489db525b67e51a24d411acafa121c649c1827b3e8?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27',
        buttons: [
            { url: "products/test", text: 'products.standardChemicalLiquidPackaging', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/feeda5f6cc580b4cb3e9d5a3d2132277610f29b3e6ab5add8f314b94d29514c4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' }
        ],
    },
    {
        title: 'products.otherPackaging',  
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dbee1bdc7bfb051c6be33f511cb46166f4c7bdfb24ced765b830cb0616b894e2?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27',
        buttons: [
            { url: "products/test", text: 'products.standardOtherPackaging', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/feeda5f6cc580b4cb3e9d5a3d2132277610f29b3e6ab5add8f314b94d29514c4?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' },
            { url: "products/test", text: 'products.exclusiveOtherPackaging', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b5511573818e426ce2a849c9e96d18e3ba2d15d826279bd25ae0ce325907268f?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27' }
        ],
    }
];

function ProductGrid() {
    const { t } = useTranslation();

    return (
        <section className={styles.productGrid}>
            {productData.map((product, index) => (
                <ProductCard key={index} title={t(product.title)} image={product.image} buttons={product.buttons.map(button => ({ ...button, text: t(button.text) }))} />
            ))}
        </section>
    );
}

export default ProductGrid;
