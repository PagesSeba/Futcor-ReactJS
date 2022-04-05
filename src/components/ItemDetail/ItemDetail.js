import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import {mockCatalogo} from "../../Catalogo/Catalogo"

function ItemDetail({item}){
    const {img, equipo, precio, stock, info, detalle, talle} = item
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
                <ItemCount stock={stock} initial={1}/>
            </div>
        </div>
    )
}


export default ItemDetail