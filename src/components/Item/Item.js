import React  from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';


function Item(props) {
    const{img , equipo , info , precio , id,  stock} = props
    
    return(
        <div className="sombras card">
            <img src={img} alt={img} className="casacas"></img>
            <h2>{equipo}</h2>
            <p className='small'>{info}</p>
            <p className="precios">${precio}</p>
            <Button>Más Información</Button>
        </div>
    )
}

export default Item