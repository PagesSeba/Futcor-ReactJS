import React from 'react'
import Button from '@mui/material/Button';


function Card(props) {
    const{img , equipo , info , precio} = props

    return(
        <div className="sombras card">
            <img src={img} className="casacas"></img>
            <h2>{equipo}</h2>
            <p>{info}</p>
            <p className="precios">{precio}</p>
            <Button variant="contained" sx={{ mb: 3 }} >Comprar</Button>

            </div>
    )
}

export default Card