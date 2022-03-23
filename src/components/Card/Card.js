import React  from 'react'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';


function Card(props) {
    const{img , equipo , info , precio , stock} = props
    
    const onAdd = (contador) => {
        return (
            alert("Agregaste al carrito: " + contador + " Camisetas!")
        )
    }

    return(
        <div className="sombras card">
            <img src={img} className="casacas"></img>
            <h2>{equipo}</h2>
            <p>{info}</p>
            <p className="precios">{precio}</p>
            <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
        </div>
    )
}

export default Card