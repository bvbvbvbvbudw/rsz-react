import React from "react";
import Logo from "../Logo";

export default function Header() {
    return (
        <header id="header">
            <div className="right-side">
                <div className="logo">
                    <Logo />
                    <p>Рокитнівський скляний завод</p>
                </div>

            </div>
            <nav className="left-side">
                <a href="#">ГОЛОВНА</a>
                <a href="#">ПРО НАС</a>
                <a href="#" className="active">ПРОДУКЦІЯ</a>
                <a href="#">АКЦІОНЕРАМ</a>
                <a href="#">КОНТАКТИ</a>
            </nav>
            {/*<div className="language-switcher">*/}
            {/*    <button>UA</button>*/}
            {/*    <button>EN</button>*/}
            {/*    <button>DE</button>*/}
            {/*    <button>PL</button>*/}
            {/*</div>*/}
        </header>
    );
}
