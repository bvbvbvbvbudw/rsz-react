import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './i18n';


// TODO: Перечитать тз.
//  Сделать логику чтобы по апи загружались сохранялись картинки которые бекграунд Главной

import './rsz/assets/fonts/fonts.css';
import Products from "./rsz/pages/Products";
import ProductsPage from "./rsz/pages/ProductPage";
import MainPage from "./rsz/pages/MainPage";
import Bottle from "./rsz/pages/Bottle";
import ContactPage from "./rsz/pages/ContactPage";
import AboutUs from "./rsz/pages/AboutUs";
import ShareholdersPage from "./rsz/pages/ShareholdersPage";
import SinglePage from "./rsz/Components/content/Shareholders/Single/SinglePage";

// TODO: Логику на фото сделать
//  Про нас(Серт) поправить нижгюю штуку. Добавить гугл карту.
//   крошки/допереводить
import './i18n';
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
            <Route path="/shareholders" element={<ShareholdersPage />} />
            <Route path="/shareholders/test" element={<SinglePage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}