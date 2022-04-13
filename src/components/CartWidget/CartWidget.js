import React, {useState, useContext} from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext';
import { Badge } from '@mui/material';
import {IconButton} from '@mui/material'

function CartWidget() {
    
    const { cartProducts, deleteProducts } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    console.log("cartProducts: ", cartProducts)

    let cantidadItems = cartProducts.length
  
    return (
    <>
        {
    cantidadItems ? (
        <>
        <div>
          <Badge badgeContent={cantidadItems} color="primary" showZero>
            <ShoppingCartIcon 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size= "small"
            />
            </Badge>
            <Menu
                anchorEl={anchorEl}
                className='desplegableCart'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                >
                <h3>Carrito:</h3>
                <Divider />
                {cartProducts.map( (cartProduct) => {
                    return(
                        <MenuItem className='modalCarrito' key={cartProduct.id}>
                            <div>
                                <img className='imgCarrito' src={cartProduct.img} /> 
                            </div>
                            <div className='infoCarrito'>
                                <div className="precios col">
                                    <span>{cartProduct.equipo} {cartProduct.categoria}</span>
                                    <span>x{cartProduct.cantidad}</span>
                                    <span>${cartProduct.precio}</span>
                                </div>
                            </div>
                            <IconButton onClick={() => deleteProducts(cartProduct)}>
                                <DeleteIcon color="error"/>
                            </IconButton>
                        </MenuItem>
                    )
                })}
                
                <Divider />
                <div className='irACarrito'>
                    <Link to="/cart" className="linkNV">
                        <Button className="btnCarrito" variant="contained" color="primary" > 
                            Ir a Carrito
                        </Button>
                    </Link>
                </div>
            </Menu>
        </div>
    
        </>
    ):(
          <div></div>
        )
      }

    </>
  )
    
    }
    
    export default CartWidget;