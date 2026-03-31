import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Calculator from './component/Calculator';
import Quote from './component/quote';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
);
