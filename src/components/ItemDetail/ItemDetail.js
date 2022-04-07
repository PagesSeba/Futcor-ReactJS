import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import {mockCatalogo} from "../../Catalogo/Catalogo"

function ItemDetail({item}){
    const {img, equipo, precio, stock, info, detalle, talle} = item
    
    const [click, setClick] = useState(true);

    const onAdd = (contador) => {
        alert(`!${contador} Camisetas Agregadas al Carrito!`)
        if (contador > 0 ){
            setClick(!click)
        
          }
    }

    
    return(
        <div className="ItemDetailCard">
            <div>
                <img src={img} className="ItemDetailImg"></img>
            </div>
            <div className="ItemDetailSM">
                <p className="precios">Equipo: {equipo}</p>
                <p className="precios">Información: {info}</p>
                <p className="precios">Talle: {talle}</p>
                <p className="precios">Detalle: {detalle}</p>
                <p className="precios">Precio: {precio}</p>
                { click ? (
                    <div>
                        <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
                    </div>  
                ) : (
                    <div className="mt10">
                        <Link className="linkNV" to={"/cart"}>
                            <Button variant="contained" color="success" >Terminar Compra</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}


export default ItemDetail