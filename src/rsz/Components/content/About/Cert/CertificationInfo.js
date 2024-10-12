import React from 'react';
import styles from './CertificationInfo.module.css';

const CertificationInfo = () => {
    return (
        <section className={styles.certificationInfo}>
            <h1 className={styles.title}>Сертифікація</h1>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h2 className={styles.subtitle}>ISO 9001:2015; FSSC 22000 (v.5.1).</h2>
                    <p className={styles.description}>
                        За рахунок поступової стратегії маркетингу забезпечити максимальний контроль за ринком продажу скляної тари на Україні та за кордоном. Забезпечення заявлених нами принципів та реалізація цілей досягається за рахунок впровадженої та сертифікованої 27 вересня 2011 року системи управління якістю. Дана система розроблена згідно вимог міжнародного стандарту <strong>ДСТУ ISO 9001:2008</strong>.
                        <br />
                        25 листопада 2016 року підприємство успішно пройшло сертифікацію згідно вимог міжнародного стандарту FSSC 22000:2015 та отримало сертифікат, який підтверджує дію системи на підприємстві, виданий органом сертифікації TUV Thuringene.V.
                    </p>
                </div>
                <div className={styles.imageContainer} />
            </div>
            <div className={styles.additionalInfo}>
                <div className={styles.textContent}>
                    <h2 className={styles.subtitle}>
                        На даний момент на підприємстві діє
                        <br />
                        <span className={styles.highlight}>ISO 9001:2015</span>;
                        <span className={styles.highlight}>FSSC 22000 (v.5.1)</span>.
                    </h2>
                    <p className={styles.description}>
                        На основі двох вище вказаних стандартів на підприємстві ПрАТ «Рокитнівський скляний завод» діє <strong>Інтегрована система управління якістю і безпекою виробництва склотари (ІСУЯіБВС).</strong>
                    </p>
                    <p className={styles.description}>
                        ІСУЯіБВС є складовою частиною організаційної структури ПрАТ "Рокитнівський скляний завод", функціонує одночасно з здійсненням всіх інших видів діяльності, забезпечуючих якісне і ритмічне протікання виробничих і невиробничих процесів на всіх етапах життєвого циклу продукції.
                    </p>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a396c215220a2ee37c417961b63f8302c2477b48d218f958c1a7d6fcaec5a22?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="Сертифікат якості" className={styles.certificateImage} />
            </div>
        </section>
    );
};

export default CertificationInfo;