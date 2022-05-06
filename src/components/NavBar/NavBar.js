import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Menu, MenuItem } from '@mui/material';
import "./NavBar.css"


function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };


    return(
        <header className="headerInicio">
        <div className="marca">
        <Link to={'/'} className="linkNV" alt="logo"><img src="futcorLogo.jpg" className="imgHeader"></img></Link>
          <p className="nombreMarca">FUTCOR</p>
          </div>
            <ul className="navbar">
              <li><Link to={'/'} className="linkNV"><Button className='navBtn'>Inicio</Button></Link></li>
              <li><Button   
                            className='navBtn'
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Camisetas
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Link to={"/Titular"}  className="linkNV"><MenuItem className="subMenuColor" onClick={handleClose}>Locales</MenuItem></Link>
                            <Link to={"/Suplente"}  className="linkNV"><MenuItem className="subMenuColor" onClick={handleClose}>Suplentes</MenuItem></Link>
                        </Menu>
                        </li>
              <li><Link to={'/nosotros'} className="linkNV"><Button className='navBtn'>Nosotros</Button></Link></li>
              <li><Link to={'/contacto'} className="linkNV"><Button className='navBtn'>Contacto</Button></Link></li>
            </ul>
            <CartWidget></CartWidget>
      </header>
    )
}

export default NavBar