import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Item from "../Item/Item";
import {mockCatalogo} from "../../Catalogo/Catalogo"



function ItemDetailContainer({id}) {
    

    const [casaca, setCasaca] = useState({});

    const getItem = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(mockCatalogo), 2000);
        })
        let result = promise;
        return result;
    };

    useEffect(() => {
        getItem()
            .then( data => {
                const finded = data.find(camiseta => camiseta.id == id);
                setCasaca(finded)
            } )
                .finally('Llamada terminada!');
    })
    return(
        <div>
            <h2>Detalle de la Camiseta:</h2>
            <ItemDetail item={casaca}/>
        </div>
    );
}



export default ItemDetailContainer