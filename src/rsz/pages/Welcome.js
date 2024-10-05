import React from "react";
import Layout from "../Layout/Layout";

export default function Welcome() {
    return (
        <>
            <Layout>
                <p>It's the Index page</p>
                <aside className="aside_year">
                    <div className="year">
                        <p className="text_year">1898</p>
                        <p className="bottom_text_year">рік заснування</p>
                    </div>
                    <div className="line"></div>
                    <div className="aside_text">Виготовляємо та доставляємо</div>
                </aside>
                <div className="text_glass">
                    Скло як витвір мистецтва
                </div>
            </Layout>
        </>
    );
}
