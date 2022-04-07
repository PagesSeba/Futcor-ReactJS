import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home';
import Camisetas from './pages/Camisetas';
import CamisetasDetalle from './pages/CamisetasDetalle';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import Carrito from './pages/Carrito';



function App() {
  return (
    <div className="App">
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
    
    
    </div>
  );
}

export default App;
