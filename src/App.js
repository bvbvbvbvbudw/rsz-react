// import routes and react
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "./rsz/pages/Welcome";

// styles
import './rsz/assets/css/style.css';

export default function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}