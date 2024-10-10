import React from 'react';
import styles from './PartnerList.module.css';

import netherlands from '../../../../assets/img/netherlands.png';
import sweden from '../../../../assets/img/Flag_of_Sweden 1.png';
import lat from '../../../../assets/img/Flag_of_Latvia 1.png';
import italy from '../../../../assets/img/Flag_of_Italy 1.png';
import belgium from '../../../../assets/img/Flag_of_Belgium 1.png';
import norway from '../../../../assets/img/Flag_of_Norway 1.png';
import romania from '../../../../assets/img/Flag_of_Romania 1.png';
import spain from '../../../../assets/img/image 9.png';
import france from '../../../../assets/img/Flag_of_France_(1794–1815,_1830–1974) 1.png';
import estonia from '../../../../assets/img/Flag_of_Estonia 1.png';
import finland from '../../../../assets/img/Flag_of_Finland 1.png';
import lithuania from '../../../../assets/img/Flag_of_Lithuania 1.png';

const partners = [
    { name: 'Голландія', flag: netherlands },
    { name: 'Швеція', flag: sweden },
    { name: 'Латвія', flag: lat },
    { name: 'Італія', flag: italy },
    { name: 'Бельгія', flag: belgium },
    { name: 'Норвегія', flag: norway },
    { name: 'Румунія', flag: romania },
    { name: 'Іспанія', flag: spain },
    { name: 'Франція', flag: france },
    { name: 'Естонія', flag: estonia },
    { name: 'Фінляндія', flag: finland },
    { name: 'Литва', flag: lithuania },
];

const PartnerList = () => {
    return (
        <div className={styles.partnerList}>
            <h2 className={styles.partnerListTitle}>Серед наших партнерів є такі країни, як:</h2>
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