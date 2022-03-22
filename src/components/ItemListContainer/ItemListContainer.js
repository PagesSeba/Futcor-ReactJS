import React from 'react'
import Card from '../Card/Card'


function ItemListContainer(props) {

    const{bienvenida , subtitulo} = props

    return(
        <div>
            <h3 className='precios'>{bienvenida}</h3>
            <p className='precios'>{subtitulo}</p>
            <div className="cInicio">
                <Card img="BelgranoTitular.jpg" equipo="Belgrano" info="Camiseta Titular de la temporada 20/21" precio="$6500"/>
                <Card img="TalleresTitular.jpg" equipo="Talleres" info="Camiseta Titular de la temporada 20/21" precio="$7000"/>
                <Card img="InstitutoTitular.jpg" equipo="Instituto" info="Camiseta Titular de la temporada 20/21" precio="$4000" />
                <Card img="RacingSuplente.jpg" equipo="Racing" info="Camiseta Suplente de la temporada 20/21" precio="$3500" />
            </div>
        </div>
    )
}

export default ItemListContainer