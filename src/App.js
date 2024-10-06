// import routes and react
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: всем надо сделать адаптив. поправить хедер. сделать 3 страницу. на 4 странице бутылку. Сделать норм отображение всех страниц вместе. Сделать смену языков логику
// 1 page
import GlassFactory from "./rsz/Components/content/MainPagesComponents/GlassFactory";
// 2 page
import GlassPage from "./rsz/pages/GlassPage";
// 3 page
// TODO: сделать
// 4 page
import ProductionWine from "./rsz/pages/ProductionWine"; // TODO: сделать джску смену фоток и менюшку
// 5 page
import MainPage from "./rsz/pages/MainPage"; // TODO: сделать джску переключателя, и первый экран
// footer
import Footer from "./rsz/Components/footer/Footer"; // TODO: поправить бекграунд

// TODO: делать все с анимациями . Переименовать все файлы правильно, чтобы все было понятно. Перечитать тз . Сделать логику чтобы по апи загружались сохранялись картинки которые бекграунд Главной

import './rsz/assets/fonts/fonts.css';
// import './rsz/assets/css/style.css';
export default function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}