import React from 'react'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
    return(
        <header className="headerInicio">
        <div className="marca">
          <img src="futcorLogo.jpg" className="imgHeader"></img>
          <p className="nombreMarca">FUTCOR</p>
          </div>
            <ul className="navbar">
              <li><Button>Inicio</Button></li>
              <li><Button>Tienda</Button></li>
              <li><Button>Nosotros</Button></li>
              <li><Button>Contacto</Button></li>
            </ul>
            <CartWidget></CartWidget>
      </header>
    )
}

export default NavBar