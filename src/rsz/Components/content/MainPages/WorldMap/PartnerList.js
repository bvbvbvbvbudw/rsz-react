import React from 'react';
import styles from './PartnerList.module.css';

import netherlands from '../../../../assets/img/netherlands.png';
import sweden from '../../../../assets/img/Flag_of_Sweden 1.png';
import latvia from '../../../../assets/img/Flag_of_Latvia 1.png';
import italy from '../../../../assets/img/Flag_of_Italy 1.png';
import belgium from '../../../../assets/img/Flag_of_Belgium 1.png';
import norway from '../../../../assets/img/Flag_of_Norway 1.png';
import romania from '../../../../assets/img/Flag_of_Romania 1.png';
import spain from '../../../../assets/img/image 9.png';
import france from '../../../../assets/img/Flag_of_France_(1794–1815,_1830–1974) 1.png';
import estonia from '../../../../assets/img/Flag_of_Estonia 1.png';
import finland from '../../../../assets/img/Flag_of_Finland 1.png';
import lithuania from '../../../../assets/img/Flag_of_Lithuania 1.png';

import {useTranslation} from "react-i18next";

const PartnerList = () => {
    const {t} = useTranslation();
    const partners = [
        { name: t('main.global.partner.netherlands'), flag: netherlands },
        { name: t('main.global.partner.sweden'), flag: sweden },
        { name: t('main.global.partner.latvia'), flag: latvia },
        { name: t('main.global.partner.italy'), flag: italy },
        { name: t('main.global.partner.belgium'), flag: belgium },
        { name: t('main.global.partner.norway'), flag: norway },
        { name: t('main.global.partner.romania'), flag: romania },
        { name: t('main.global.partner.spain'), flag: spain },
        { name: t('main.global.partner.france'), flag: france },
        { name: t('main.global.partner.estonia'), flag: estonia },
        { name: t('main.global.partner.finland'), flag: finland },
        { name: t('main.global.partner.lithuania'), flag: lithuania },
    ];
    return (
        <div className={styles.partnerList}>
            <h2 className={styles.partnerListTitle}>{t('main.global.partner.title')}</h2>
            <ul className={styles.partnerGrid}>
                {partners.map((partner, index) => (
                    <li key={index} className={styles.partnerItem}>
                        <img src={partner.flag} alt={`Flag of ${partner.name}`} className={styles.partnerFlag} />
                        <span className={styles.partnerName}>{partner.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PartnerList;