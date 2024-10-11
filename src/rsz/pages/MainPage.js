import React from 'react';
import Header from '../Components/header/Header';
import FirstPage from "../Components/content/MainPages/FirstPage";
import SecondPage from "../Components/content/MainPages/SecondPage";
import ThirdPage from "../Components/content/MainPages/ThirdPage";
import FourthPage from "../Components/content/MainPages/FourthPage";
import Footer from "../Components/footer/Footer";
import GlobalPartners from "../Components/content/MainPages/WorldMap/GlobalPartners";

export default function MainPage() {
    return (
        <div className="wrapper">
            <Header activeItem="Головна"/>
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <GlobalPartners />
            <Footer/>
        </div>
    );
}
