import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: всем надо сделать адаптив. Сделать смену языков логику
// TODO: делать все с анимациями. Перечитать тз.
//  Сделать логику чтобы по апи загружались сохранялись картинки которые бекграунд Главной
// TODO: Хедер на внутр страницах другой, сделай простенький адаптив на них. Сделать новые страниц

import './rsz/assets/fonts/fonts.css';
import Products from "./rsz/pages/Products";
import ProductsPage from "./rsz/pages/ProductPage";
import MainPage from "./rsz/pages/MainPage";
import Bottle from "./rsz/pages/Bottle";
import ContactPage from "./rsz/pages/ContactPage";
import AboutUs from "./rsz/pages/AboutUs";
import CertificationPage from "./rsz/Components/content/About/Cert/CertificationPage";
import TenderPage from "./rsz/Components/content/About/Tender/TenderPage";

// TODO: поправить в Главная отступы. Поправить про нас отступы. Адаптив. Новые страницы. Логику на фото сделать
export default function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/test" element={<ProductsPage />} />
            <Route path="/products/test/bottle" element={<Bottle />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}