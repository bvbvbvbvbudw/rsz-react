import React from "react";
import Header from "../header/Header";
import Menu from "./Menu";
import styles from "../../assets/css/ProductionWineComponent.module.css";

const ProductionWineComponent = () => {
    return (
        <div className={styles.productionWine}>
            <div className={styles.mainContainer}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f86d799a4856e336f439516d3822e128273dd294bb651f4053e46f60d4bf5f?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27"
                    alt=""
                    className={styles.backgroundImage}
                />
                {/*<Header />*/}
                <main className={styles.contentWrapper}>
                    <div className={styles.columnLayout}>
                        <section className={styles.leftColumn}>
                            <h1 className={styles.mainHeading}>
                                Скло як витвір мистецтва
                            </h1>
                        </section>
                        <aside className={styles.rightColumn}>
                            <Menu />
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductionWineComponent;