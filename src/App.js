import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: всем надо сделать адаптив. Сделать смену языков логику
// TODO: делать все с анимациями. Перечитать тз.
//  Сделать логику чтобы по апи загружались сохранялись картинки которые бекграунд Главной

import './rsz/assets/fonts/fonts.css';
import Products from "./rsz/pages/Products";
import ProductsPage from "./rsz/pages/ProductPage";
import MainPage from "./rsz/pages/MainPage";


export default function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/test" element={<ProductsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}