import React from 'react';
import Header from './../Components/header/Header';
import Footer from '../Components/footer/Footer'
// import Main from './../Components/content/Main';


export default function Layout({ children }) {

    return (<>

        <Header />
        {/*<Main>*/}
        <div className="wrapper">
            {children}
        </div>
        {/*</Main>*/}
        <Footer />
    </>)
}