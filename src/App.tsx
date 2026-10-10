import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductHrmsPage } from './pages/ProductHrmsPage';
import { ProductTutionsPage } from './pages/ProductTutionsPage';
import { ProductSupermarketPage } from './pages/ProductSupermarketPage';
import { ProductQavantaPage } from './pages/ProductQavantaPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/hrms" element={<ProductHrmsPage />} />
            <Route path="/products/ss-tutions" element={<ProductTutionsPage />} />
            <Route path="/products/ss-supermarket" element={<ProductSupermarketPage />} />
            <Route path="/qavanta" element={<ProductQavantaPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
