import React from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'



function ItemListContainer(props) {

    const{bienvenida , subtitulo} = props

    return(
        <div>
            <h3 className='precios'>{bienvenida}</h3>
            <p className='precios'>{subtitulo}</p>
            <div className="cInicio">
                    <ItemList  />
            </div>
        </div>
    )
}

export default ItemListContainer