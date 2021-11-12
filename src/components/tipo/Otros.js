import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Otros = () => {
    return (
        <div>
            <h3 className="text-center mt-5">Listado de productos</h3>
            <h3 className="text-center mt-5">Filtro aplicado: Articulos Varios</h3>           
            <ItemListContainer tipo="Otros"/>
        </div>
    )
}

export default Otros
