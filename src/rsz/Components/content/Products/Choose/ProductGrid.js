import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const productData = [
    {
        name: "Dorato 750",
        height: "296,2",
        diameter: "83,7",
        volume: "750",
        weight: "560",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/33bcd99970231ec7766a98d95ac298289d8497826f8d42d133005a9203850b4e?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
    },
    {
        name: "Dorato 750",
        height: "252",
        diameter: "93",
        volume: "1000",
        weight: "510",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6869e48b80702f3077498bbebc0e70232af1832e18f11f2b7d0adf056b6d4b5e?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
    },
    {
        name: "Riven 500",
        height: "243",
        diameter: "68.7",
        volume: "500",
        weight: "310",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4525d8286b897777051cc8a5886e6c5bbeaa7892176b8dd2a0040dbce1e7cfc8?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
    },
    {
        name: "Bordo 750",
        height: "310",
        diameter: "73,3",
        volume: "750",
        weight: "440",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/56891f753c0edde78098f3113abfbcb9332d9704bf5019316d176d5256604bfe?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
    },
    {
        name: "Riven 500",
        height: "243",
        diameter: "68.7",
        volume: "500",
        weight: "310",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4525d8286b897777051cc8a5886e6c5bbeaa7892176b8dd2a0040dbce1e7cfc8?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
    },
    {
        name: "Dorato 750",
        height: "252",
        diameter: "93",
        volume: "1000",
        weight: "510",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6869e48b80702f3077498bbebc0e70232af1832e18f11f2b7d0adf056b6d4b5e?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
    }
];

const ProductGrid = () => {
    return (
        <div className={styles.productGrid}>
            {productData.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    );
};

export default ProductGrid;