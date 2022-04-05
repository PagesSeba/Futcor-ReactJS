import React  from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';


function Item(props) {
    const{img , equipo , info , precio , id,  stock } = props
    
    const onAdd = (contador) => {
        return (
            alert("Agregaste al carrito: " + contador + " Camisetas!")
        )
    }

    return(
        <div className="sombras card">
            <img src={img} alt={img} className="casacas"></img>
            <h2>{equipo}</h2>
            <p className='small'>{info}</p>
            <Link className='linkNV' to={`/tienda/${id}`}><Button>Más Información</Button></Link>
            <p className="precios">{precio}</p>
            <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
        </div>
    )
}

export default Item