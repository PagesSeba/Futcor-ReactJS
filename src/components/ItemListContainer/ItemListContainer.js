import React from 'react'
import Card from '../Card/Card'
import ItemCount from '../ItemCount/ItemCount'


function ItemListContainer(props) {

    const{bienvenida , subtitulo} = props

    return(
        <div>
            <h3 className='precios'>{bienvenida}</h3>
            <p className='precios'>{subtitulo}</p>
            <div className="cInicio">
                    <Card img="BelgranoTitular.jpg" equipo="Belgrano" info="Camiseta Titular de la temporada 20/21" precio="$6500" initial={1} stock ="4"/>
                    <Card img="TalleresTitular.jpg" equipo="Talleres" info="Camiseta Titular de la temporada 20/21" precio="$7000" initial={1} stock ="7"/>
                    <Card img="InstitutoTitular.jpg" equipo="Instituto" info="Camiseta Titular de la temporada 20/21" precio="$4000" initial={1} stock ="9" />
                    <Card img="RacingSuplente.jpg" equipo="Racing" info="Camiseta Suplente de la temporada 20/21" precio="$3500" initial={1} stock ="10" />
            </div>
        </div>
    )
}

export default ItemListContainer