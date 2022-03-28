import React,{useState, useEffect} from "react";
import Item from "../Item/Item";
import {mockCatalogo} from "../../Catalogo/Catalogo"



function ItemList() {

    const [camisetas, setCamisetas] = useState([])

    const getCamisetas = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(mockCatalogo);
            },2000);
        })
    } 

    useEffect( () => {
        getCamisetas().then( (remera) => {
            setCamisetas(remera)
        }).finally( () => {
            console.log("Catálogo Obtenido Correctamente!")
        })
    }, [])

    return (
        <div className="cInicio">
            {
            camisetas.map((camiseta) => {
                return(
                    <div className="card" key={camiseta.id}>
                        <Item 
                        img={camiseta.img}
                        equipo={camiseta.equipo}
                        info={camiseta.info}
                        precio={camiseta.precio}
                        id={camiseta.id}
                        stock={camiseta.stock}
                        />
                    </div>
                )
            })
        }
        </div>
    )

}





export default ItemList