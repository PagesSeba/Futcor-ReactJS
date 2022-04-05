import React, {useEffect, useState} from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import {Link, useParams} from "react-router-dom"
import { mockCatalogo } from '../../Catalogo/Catalogo'



function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockCatalogo)
        })
    }

    useEffect(() => {
        
        setProducts([])
        return getProducts().then((productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
            
            
            
        })

    }, [category])

    const filterProductByCategory = (array, category) => {
        array.map((producto)=> {
            if (category == producto.categoria){
                return setProducts( products => [...products, producto])
            }
        })


    }


    return (
        
        <div className="cInicio">
            
            {
                products.length ? (
                    products.map((producto) => {
                        const { id, equipo, precio, info, img, stock, categoria } = producto;
                        if (category) {
                        return (
                            
                            <Link className=' card linkNV negro' to={`./${id}`}>
                            <div key={id} className="sombras" >
                                <Item
                                    equipo={equipo}
                                    precio={precio}
                                    info={info}
                                    img={img}
                                    stock={stock}

                                />
                               
                            </div>
                            </Link>
                        )} 
                        else {
                            return (
                            
                                <Link className='card linkNV negro' to={`./${categoria}/${id}`}>
                                <div key={id} className="sombras" >
                                    <Item
                                        equipo={equipo}
                                        precio={precio}
                                        info={info}
                                        img={img}
                                        stock={stock}
    
                                    />
                                   
                                </div>
                                </Link>
                            )}

                    }



                    )

                ) : (
                    console.log("Cargando..")
                )
            }

        </div>


    )
}

export default ItemListContainer