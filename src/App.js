import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: всем надо сделать адаптив. Сделать смену языков логику
// TODO: делать все с анимациями. Перечитать тз.
//  Сделать логику чтобы по апи загружались сохранялись картинки которые бекграунд Главной
// TODO: Хедер на внутр страницах другой, сделай простенький адаптив на них.

import './rsz/assets/fonts/fonts.css';
import Products from "./rsz/pages/Products";
import ProductsPage from "./rsz/pages/ProductPage";
import MainPage from "./rsz/pages/MainPage";
import Bottle from "./rsz/pages/Bottle";
import ContactPage from "./rsz/pages/ContactPage";
import AboutUs from "./rsz/pages/AboutUs";
import ShareholdersPage from "./rsz/pages/ShareholdersPage";
import SinglePage from "./rsz/Components/content/Shareholders/Single/SinglePage";

// TODO: Поправить про нас отступы. Адаптив. Новые страницы. Логику на фото сделать
// TODO: сделать переводы. Сделать логику разворачивание. Сделать ховеры.
//  Про нас(Серт) поправить нижгюю штуку. Сделать фильтр. Добавить гугл карту. Поправить футер иконки
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