import React, { useState, useEffect } from 'react';
import Header from '../Components/header/Header';
import FirstPage from "../Components/content/MainPages/FirstPage";
import SecondPage from "../Components/content/MainPages/SecondPage";
import ThirdPage from "../Components/content/MainPages/ThirdPage";
import FourthPage from "../Components/content/MainPages/FourthPage";
import FivethPage from "../Components/content/MainPages/FivethPage";
import Footer from "../Components/footer/Footer";
import GlobalPartners from "../Components/content/MainPages/WorldMap/GlobalPartners";

export default function MainPage() {
    const [currentSection, setCurrentSection] = useState(0);

    const sections = [
        <FirstPage />,
        <SecondPage />,
        <ThirdPage />,
        <FourthPage />,
        <GlobalPartners />,
    ];

    const smoothScrollTo = (targetPosition, duration) => {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY > 0 && currentSection < sections.length - 1) {
                setCurrentSection((prevSection) => prevSection + 1);
            } else if (event.deltaY < 0 && currentSection > 0) {
                setCurrentSection((prevSection) => prevSection - 1);
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSection, sections.length]);

    useEffect(() => {
        const targetSection = document.getElementById(`section-${currentSection}`);
        if (targetSection) {
            const targetPosition = targetSection.offsetTop;
            smoothScrollTo(targetPosition, 1000);
        }
    }, [currentSection]);

    return (
        <div className="wrapper">
            <Header />
            {sections.map((SectionComponent, index) => (
                <div
                    className="section"
                    key={index}
                    id={`section-${index}`}
                    style={{ height: '100vh' }}
                >
                    {SectionComponent}
                </div>
            ))}
            <Footer/>
        </div>
    );
}
