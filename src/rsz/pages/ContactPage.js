import React from 'react';

import styles from '../Components/content/Contacts/ContactPage.module.css';
import Header from "../Components/header/Header";
import ContactInfo from "../Components/content/Contacts/ContactInfo";
import ContactForm from "../Components/content/Contacts/ContactForm";
import MapImage from "../Components/content/Contacts/MapImage";
import Footer from "../Components/footer/Footer";

function ContactPage() {
    return (
        <div className={styles.contactPage}>
            <Header activeItem="Контакти"/>
            <main className={styles.mainContent}>
                <div className={styles.infoWrapper}>
                    <div className={styles.breadcrumbs}>
                        <a href="/" className={styles.homeLink}>
                            <span className={styles.visuallyHidden}>Home</span>
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d4ab29d6655e95a46bf4b61b7c655837aaf3958824771b951482c66116dc59?placeholderIfAbsent=true&apiKey=4de2176252d24e8ebcd3e8166c772c27" alt="" className={styles.homeIcon} />
                        </a>
                        <span className={styles.currentPage}>Контакти</span>
                    </div>
                    <div className={styles.contentWrapper}>
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
                <MapImage />
            </main>
            <Footer />
        </div>
    );
}

export default ContactPage;