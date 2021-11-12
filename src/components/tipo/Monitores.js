import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Monitores = () => {
    return (
        <div>
            <h3 className="text-center mt-5">Listado de productos</h3>
            <h3 className="text-center mt-5">Filtro aplicado: Monitores</h3>
            <ItemListContainer tipo="Monitores"/> 
        </div>
    )
}

export default Monitores
