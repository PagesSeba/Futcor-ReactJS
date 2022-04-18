import React, {useEffect, useState} from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import {Link, useParams} from "react-router-dom"
import { collection, getDocs, query , where } from "firebase/firestore"
import db from "../../firebase"



function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const itemsCollection = collection(db, "productos")
        const productosSnapshot = await getDocs(itemsCollection)
        console.log("productosSnapshot : ", productosSnapshot)
        const productList = productosSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
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