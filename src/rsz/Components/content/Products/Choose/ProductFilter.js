import React from 'react';
import styles from './ProductFilter.module.css';

const ProductFilter = () => {
    return (
        <aside className={styles.filterContainer}>
            <button className={styles.clearFilterButton}>
                очистити фільтр
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f67f72b0817d430ef051d9118affbc0f5db3071ca93c11359dcc0cc281d20092?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Clear filter icon" className={styles.clearIcon} />
            </button>
            <form className={styles.filterForm}>
                <fieldset className={styles.filterGroup}>
                    <legend className={styles.filterLabel}>Категорії:</legend>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="category" value="beer" className={styles.radioInput} />
                            Для пива
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="category" value="wine" className={styles.radioInput} />
                            Для вина
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="category" value="water" className={styles.radioInput} />
                            Для мінімальної води
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="category" value="chemicals" className={styles.radioInput} />
                            Для хімічних рідин
                        </label>
                    </div>
                </fieldset>

                <fieldset className={styles.filterGroup}>
                    <legend className={styles.filterLabel}>Тип тари:</legend>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="type" value="typical" className={styles.radioInput} />
                            Типова
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="type" value="exclusive" className={styles.radioInput} />
                            Ексклюзивна
                        </label>
                    </div>
                </fieldset>

                <fieldset className={styles.filterGroup}>
                    <legend className={styles.filterLabel}>Тип вінчика:</legend>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="cap" value="crown" className={styles.radioInput} />
                            Кроненпробка
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="cap" value="kpsh" className={styles.radioInput} />
                            КПШ
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="cap" value="p295" className={styles.radioInput} />
                            П-29.5
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="cap" value="pr335" className={styles.radioInput} />
                            ПР-33.5
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="cap" value="p32b" className={styles.radioInput} />
                            П-32-Б
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="cap" value="vp32" className={styles.radioInput} />
                            ВП-32
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="cap" value="vp28" className={styles.radioInput} />
                            ВП-28
                        </label>
                    </div>
                </fieldset>

                <fieldset className={styles.filterGroup}>
                    <legend className={styles.filterLabel}>Колір:</legend>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="color" value="green" className={styles.radioInput} />
                            Зелений
                        </label>
                        <label className={styles.radioLabel}>
                            <input type="radio" name="color" value="brown" className={styles.radioInput} />
                            Коричневий
                        </label>
                    </div>
                </fieldset>

                <fieldset className={styles.filterGroup}>
                    <legend className={styles.filterLabel}>Характеристики:</legend>
                    <div className={styles.rangeGroup}>
                        <label className={styles.rangeLabel}>
                            Об'єм (мл):
                            <input type="range" min="330" max="750" className={styles.rangeInput} />
                            <div className={styles.rangeValues}>
                                <span>330</span>
                                <span>750</span>
                            </div>
                        </label>
                    </div>
                    <div className={styles.rangeGroup}>
                        <label className={styles.rangeLabel}>
                            Висота (мм):
                            <input type="range" min="174" max="323" className={styles.rangeInput} />
                            <div className={styles.rangeValues}>
                                <span>174</span>
                                <span>323</span>
                            </div>
                        </label>
                    </div>
                    <div className={styles.rangeGroup}>
                        <label className={styles.rangeLabel}>
                            Діаметр (мм):
                            <input type="range" min="60" max="82.4" step="0.1" className={styles.rangeInput} />
                            <div className={styles.rangeValues}>
                                <span>60</span>
                                <span>82,4</span>
                            </div>
                        </label>
                    </div>
                    <div className={styles.rangeGroup}>
                        <label className={styles.rangeLabel}>
                            Вага (г):
                            <input type="range" min="200" max="585" className={styles.rangeInput} />
                            <div className={styles.rangeValues}>
                                <span>200</span>
                                <span>585</span>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </form>
        </aside>
    );
};

export default ProductFilter;