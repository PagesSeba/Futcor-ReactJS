// react
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar'

// pages
import Home from './pages/Home';
import Camisetas from './pages/Camisetas';
import CamisetasDetalle from './pages/CamisetasDetalle';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import Carrito from './pages/Carrito';

// context
import {CartProvider} from './context/CartContext';




function App() {
  return (
    <div className="App">
        
      <CartProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:category" element={<Camisetas />} />
                <Route path="/:category/:id" element={<CamisetasDetalle />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/cart" element={<Carrito />} />
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    
    </div>
  );
}

export default App;
