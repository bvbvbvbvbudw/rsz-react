import React, {useEffect, useState} from 'react';
import styles from './ProductFilter.module.css';

const ProductFilter = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        category: true,
        type: true,
        cap: true,
        color: true,
        characteristics: true,
    });

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            setIsDropdownOpen({
                category: false,
                type: false,
                cap: false,
                color: false,
                characteristics: false,
            });
        }
    }, []);

    const [volumeRange, setVolumeRange] = useState([330, 750]);
    const [heightRange, setHeightRange] = useState([174, 323]);
    const [diameterRange, setDiameterRange] = useState([60, 82.4]);
    const [weightRange, setWeightRange] = useState([200, 585]);

    const handleRangeChange = (setter, index, value) => {
        setter(prev => {
            const newRange = [...prev];
            newRange[index] = Number(value);

            if (index === 0 && newRange[0] > newRange[1]) {
                newRange[0] = newRange[1];
            }

            if (index === 1 && newRange[1] < newRange[0]) {
                newRange[1] = newRange[0];
            }

            return newRange;
        });
    };

    const toggleDropdown = (name) => {
        setIsDropdownOpen((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <aside className={styles.filterContainer}>
            <form className={styles.filterForm}>
                <div className={styles.dropdown}>
                    <fieldset className={styles.filterGroup}>
                        <legend
                            className={styles.filterLabel}
                            onClick={() => toggleDropdown('category')}
                        >
                            Категорії:
                            <svg
                                className={`${styles.arrow} ${isDropdownOpen.category ? styles.arrowUp : styles.arrowDown}`}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </legend>
                        <div
                            className={styles.dropdownContent}
                            style={{ maxHeight: isDropdownOpen.category ? '500px' : '0' }}
                        >
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="category" value="beer" className={styles.radioInput}/>
                                    Для пива
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="category" value="wine" className={styles.radioInput}/>
                                    Для вина
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="category" value="water" className={styles.radioInput}/>
                                    Для мінімальної води
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="category" value="chemicals" className={styles.radioInput}/>
                                    Для хімічних рідин
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {/* Тип тари */}
                <div className={styles.dropdown}>
                    <fieldset className={styles.filterGroup}>
                        <legend
                            className={styles.filterLabel}
                            onClick={() => toggleDropdown('type')}
                        >
                            Тип тари:
                            <svg
                                className={`${styles.arrow} ${isDropdownOpen.type ? styles.arrowUp : styles.arrowDown}`}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </legend>
                        <div
                            className={styles.dropdownContent}
                            style={{ maxHeight: isDropdownOpen.type ? '500px' : '0' }}
                        >
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="type" value="typical" className={styles.radioInput}/>
                                    Типова
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="type" value="exclusive" className={styles.radioInput}/>
                                    Ексклюзивна
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {/* Тип вінчика */}
                <div className={styles.dropdown}>
                    <fieldset className={styles.filterGroup}>
                        <legend
                            className={styles.filterLabel}
                            onClick={() => toggleDropdown('cap')}
                        >
                            Тип вінчика:
                            <svg
                                className={`${styles.arrow} ${isDropdownOpen.cap ? styles.arrowUp : styles.arrowDown}`}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </legend>
                        <div
                            className={styles.dropdownContent}
                            style={{ maxHeight: isDropdownOpen.cap ? '500px' : '0' }}
                        >
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="cap" value="crown" className={styles.radioInput}/>
                                    Кроненпробка
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="cap" value="kpsh" className={styles.radioInput}/>
                                    КПШ
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="cap" value="p295" className={styles.radioInput}/>
                                    П-29.5
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="cap" value="pr335" className={styles.radioInput}/>
                                    ПР-33.5
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {/* Колір */}
                <div className={styles.dropdown}>
                    <fieldset className={styles.filterGroup}>
                        <legend
                            className={styles.filterLabel}
                            onClick={() => toggleDropdown('color')}
                        >
                            Колір:
                            <svg
                                className={`${styles.arrow} ${isDropdownOpen.color ? styles.arrowUp : styles.arrowDown}`}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </legend>
                        <div
                            className={styles.dropdownContent}
                            style={{ maxHeight: isDropdownOpen.color ? '500px' : '0' }}
                        >
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="color" value="green" className={styles.radioInput}/>
                                    Зелений
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="color" value="brown" className={styles.radioInput}/>
                                    Коричневий
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {/* Характеристики */}
                <div className={styles.dropdown}>
                    <fieldset className={styles.filterGroup}>
                        <legend
                            className={styles.filterLabel}
                            onClick={() => toggleDropdown('characteristics')}
                        >
                            Характеристики:
                            <svg
                                className={`${styles.arrow} ${isDropdownOpen.characteristics ? styles.arrowUp : styles.arrowDown}`}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </legend>
                        <div
                            className={styles.dropdownContent}
                            style={{ maxHeight: isDropdownOpen.characteristics ? '500px' : '0' }}
                        >
                            <div className={styles.rangeGroup}>
                                <label className={styles.rangeLabel}>
                                    Об'єм (мл):
                                    <div className={styles.doubleRange}>
                                        <input
                                            type="range" className={styles.rangeInput}
                                            min="330"
                                            max="750"
                                            value={volumeRange[0]}
                                            onChange={(e) => handleRangeChange(setVolumeRange, 0, e.target.value)}
                                        />
                                        <input
                                            type="range" className={styles.rangeInput}
                                            min="330"
                                            max="750"
                                            value={volumeRange[1]}
                                            onChange={(e) => handleRangeChange(setVolumeRange, 1, e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.rangeValues}>
                                        {volumeRange[0]} мл - {volumeRange[1]} мл
                                    </div>
                                </label>

                                <label className={styles.rangeLabel}>
                                    Висота (мм):
                                    <div className={styles.doubleRange}>
                                        <input
                                            type="range" className={styles.rangeInput}
                                            min="174"
                                            max="323"
                                            value={heightRange[0]}
                                            onChange={(e) => handleRangeChange(setHeightRange, 0, e.target.value)}
                                        />
                                        <input
                                            type="range" className={styles.rangeInput}
                                            min="174"
                                            max="323"
                                            value={heightRange[1]}
                                            onChange={(e) => handleRangeChange(setHeightRange, 1, e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.rangeValues}>
                                        {heightRange[0]} мм - {heightRange[1]} мм
                                    </div>
                                </label>

                                <label className={styles.rangeLabel}>
                                    Діаметр (мм):
                                    <div className={styles.doubleRange}>
                                        <input
                                            type="range" className={styles.rangeInput}
                                            min="60"
                                            max="82.4"
                                            value={diameterRange[0]}
                                            onChange={(e) => handleRangeChange(setDiameterRange, 0, e.target.value)}
                                        />
                                        <input
                                            type="range" className={styles.rangeInput}
                                            min="60"
                                            max="82.4"
                                            value={diameterRange[1]}
                                            onChange={(e) => handleRangeChange(setDiameterRange, 1, e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.rangeValues}>
                                        {diameterRange[0]} мм - {diameterRange[1]} мм
                                    </div>
                                </label>

                                <label className={styles.rangeLabel}>
                                    Вага (г):
                                    <div className={styles.doubleRange}>
                                        <input
                                            type="range" className={styles.rangeInput}
                                            min="200"
                                            max="585"
                                            value={weightRange[0]}
                                            onChange={(e) => handleRangeChange(setWeightRange, 0, e.target.value)}
                                        />
                                        <input
                                            type="range" className={styles.rangeInput}
                                            min="200"
                                            max="585"
                                            value={weightRange[1]}
                                            onChange={(e) => handleRangeChange(setWeightRange, 1, e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.rangeValues}>
                                        {weightRange[0]} г - {weightRange[1]} г
                                    </div>
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </form>
        </aside>
    );
};

export default ProductFilter;
