import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
    return(
        <header className="headerInicio">
        <div className="marca">
        <Link to={'/'} className="linkNV" alt="logo"><img src="futcorLogo.jpg" className="imgHeader"></img></Link>
          <p className="nombreMarca">FUTCOR</p>
          </div>
            <ul className="navbar">
              <li><Link to={'/'} className="linkNV"><Button>Inicio</Button></Link></li>
              <li><Link to={'/tienda'} className="linkNV"><Button>Tienda</Button></Link></li>
              <li><Link to={'/nosotros'} className="linkNV"><Button>Nosotros</Button></Link></li>
              <li><Link to={'/contacto'} className="linkNV"><Button>Contacto</Button></Link></li>
            </ul>
            <CartWidget></CartWidget>
      </header>
    )
}

export default NavBar