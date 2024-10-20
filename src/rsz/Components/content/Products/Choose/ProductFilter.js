import React, {useEffect, useState} from 'react';
import styles from './ProductFilter.module.css';
import {useTranslation} from "react-i18next";

const ProductFilter = () => {
    const {t} = useTranslation();
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
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedCap, setSelectedCap] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
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
    const handleClearFilters = () => {
        setSelectedCategory('');
        setSelectedType('');
        setSelectedCap('');
        setSelectedColor('');
        setVolumeRange([330, 750]);
        setHeightRange([174, 323]);
        setDiameterRange([60, 82.4]);
        setWeightRange([200, 585]);
    };
    return (
        <aside className={styles.filterContainer}>
            <button className={styles.clearFilterButton} onClick={handleClearFilters}>
                {t('filters.clearFilters')}
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.4999 3.74999C9.14914 3.75051 7.83486 4.18865 6.75396 4.99879C5.67305 5.80892 4.88371 6.94745 4.50415 8.24383C4.1246 9.54022 4.17526 10.9247 4.64856 12.1899C5.12185 13.455 5.9923 14.5328 7.12953 15.2618C8.26675 15.9907 9.60954 16.3317 10.9568 16.2334C12.304 16.1352 13.5832 15.6032 14.6026 14.717C15.6221 13.8308 16.3271 12.6382 16.6119 11.3177C16.8967 9.99729 16.746 8.62012 16.1824 7.39249C16.1211 7.24323 16.1199 7.07603 16.179 6.92589C16.2381 6.77574 16.353 6.65429 16.4997 6.58694C16.6463 6.5196 16.8133 6.51158 16.9658 6.56457C17.1182 6.61756 17.2442 6.72745 17.3174 6.87124C17.9937 8.34447 18.1744 9.99715 17.8325 11.5817C17.4907 13.1663 16.6446 14.5974 15.4211 15.6608C14.1976 16.7242 12.6625 17.3625 11.0458 17.4802C9.429 17.5979 7.81764 17.1886 6.45303 16.3136C5.08842 15.4387 4.04402 14.1451 3.47627 12.6268C2.90852 11.1084 2.84799 9.44701 3.30374 7.89138C3.75949 6.33574 4.70698 4.96963 6.0043 3.99768C7.30162 3.02573 8.87892 2.50026 10.4999 2.49999V3.74999Z" fill="white"/>
                    <path d="M10.4999 5.58249V0.667486C10.5 0.608106 10.5169 0.549962 10.5488 0.499862C10.5807 0.449762 10.6261 0.40978 10.6799 0.384597C10.7337 0.359415 10.7935 0.350074 10.8524 0.35767C10.9113 0.365266 10.9668 0.389483 11.0124 0.427486L13.9624 2.88499C14.1124 3.00999 14.1124 3.23999 13.9624 3.36499L11.0124 5.82249C10.9668 5.86049 10.9113 5.88471 10.8524 5.8923C10.7935 5.8999 10.7337 5.89056 10.6799 5.86537C10.6261 5.84019 10.5807 5.80021 10.5488 5.75011C10.5169 5.70001 10.5 5.64187 10.4999 5.58249Z" fill="white"/>
                </svg>
            </button>
            <form className={styles.filterForm}>
                <div className={styles.dropdown}>
                    <fieldset className={styles.filterGroup}>
                        <legend
                            className={styles.filterLabel}
                            onClick={() => toggleDropdown('category')}
                        >
                            {t('filters.categories')}
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
                                    <input type="radio" name="category" value="beer" checked={selectedCategory === "category1"} onChange={() => setSelectedCategory("category1")} className={styles.radioInput}/>
                                    {t('filters.beer')}
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="category" value="wine" checked={selectedCategory === "category2"} onChange={() => setSelectedCategory("category2")} className={styles.radioInput}/>
                                    {t("filters.wine")}
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="category" value="water" checked={selectedCategory === "category3"} onChange={() => setSelectedCategory("category3")} className={styles.radioInput}/>
                                    {t('filters.water')}
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="category" value="chemicals" checked={selectedCategory === "category4"} onChange={() => setSelectedCategory("category4")} className={styles.radioInput}/>
                                    {t('filters.chemicals')}
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className={styles.dropdown}>
                    <fieldset className={styles.filterGroup}>
                        <legend
                            className={styles.filterLabel}
                            onClick={() => toggleDropdown('type')}
                        >
                            {t('filters.typeOfContainer')}
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
                                    <input type="radio" name="type" value="typical" checked={selectedType === "type1"} onChange={() => setSelectedType("type1")} className={styles.radioInput}/>
                                    {t('filters.typical')}
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="type" value="exclusive" checked={selectedType === "type2"} onChange={() => setSelectedType("type2")} className={styles.radioInput}/>
                                    {t('filters.exclusive')}
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
                            {t('filters.typeOfCap')}
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
                                    <input type="radio" name="cap" value="crown" checked={selectedCap === "cap1"} onChange={() => setSelectedCap("cap1")} className={styles.radioInput}/>
                                    {t('filters.crown')}
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="cap" value="kpsh" checked={selectedCap === "cap2"} onChange={() => setSelectedCap("cap2")} className={styles.radioInput}/>
                                    {t('filters.kpsh')}
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="cap" value="p295" checked={selectedCap === "cap3"} onChange={() => setSelectedCap("cap3")} className={styles.radioInput}/>
                                    {t('filters.p295')}
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="cap" value="pr335" checked={selectedCap === "cap4"} onChange={() => setSelectedCap("cap4")} className={styles.radioInput}/>
                                    {t('filters.pr335')}
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
                            {t('filters.color')}
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
                                    <input type="radio" name="color" checked={selectedColor === "color1"} onChange={() => setSelectedColor("color1")} value="green" className={styles.radioInput}/>
                                    {t('filters.green')}
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="color" checked={selectedColor === "color2"} onChange={() => setSelectedColor("color2")} value="brown" className={styles.radioInput}/>
                                    {t('filters.brown')}
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
                            {t('filters.characteristics')}
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
                                    {t('filters.volume')}
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
                                    {t('filters.height')}
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
                                    {t('filters.diameter')}
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
                                    {t('filters.weight')}
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
