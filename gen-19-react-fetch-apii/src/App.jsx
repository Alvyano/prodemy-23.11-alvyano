import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50">
      <Header /> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App