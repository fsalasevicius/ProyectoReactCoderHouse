import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const DiscoSsd = () => {
    return (
        <div>
            <h3 className="text-center mt-5">Listado de productos</h3>
            <h3 className="text-center mt-5">Filtro aplicado: Discos</h3>
            <ItemListContainer tipo="Discos"/>
        </div>
    )
}

export default DiscoSsd
