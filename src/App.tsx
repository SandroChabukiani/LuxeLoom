import React, { useState } from 'react';
import './App.css';
import Header  from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/home';
import theme from './components/Header';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import SingleProduct  from './pages/SingleProduct/SingleProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './cart/cart';
import Catalog from './pages/catalog/catalog';
function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Header />
          <Router>                              
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<SingleProduct />} />
            </Routes>
          </Router>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
