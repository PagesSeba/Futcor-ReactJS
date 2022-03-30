import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Item from "../Item/Item";



function ItemDetailContainer() {
    

    const mockCamiseta = {
        img: "BelgranoTitular.jpg", 
        equipo: "Belgrano" ,
        precio: "$6500", 
        stock: 3 ,
        info: "Camiseta Titular de la temporada 20/21" ,
        detalle: "Ancho: 58cm | Largo: 76cm",
        talle: "L"
        }

    const [casaca, setCasaca] = useState([]);

    const getItem = async () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(mockCamiseta), 2000);
        })
        let result = await promise;
        return result;
    };

    useEffect(() => {
        getItem()
            .then( data => setCasaca(data) )
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