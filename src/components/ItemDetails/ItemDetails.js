import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import {useCartContext} from '../../context/context';
import { AiFillTag, AiFillMediumSquare, AiFillDatabase} from "react-icons/ai";


const ItemDetail = ({ item }) => {
	
	const {addToCart} = useCartContext();
    

    const handleAddProduct = (e, qty) => {
        e.stopPropagation();

        addToCart({
            cantidad: qty,
            item,
        }, qty)
    }
	return (
		<div className="container ">
			<div className="row">
				<div className="col-12 text-center mb-5" >
					<h2>Detalle de Producto</h2>
				</div>
				</div>
			<div className="row">
				<div className="col-lg-6" >
					<img src={item.picture} alt={item.titulo} className="img-fluid" />
				</div>
				<div className="col-lg-6 fs-5">
					<h2>{item.nombre}</h2>
					<p>{item.descripcion}</p>					
                    
                        <ul className="list-unstyled"> 
						
                            <li className="mt-4"><AiFillTag/> Marca: {item.marca}</li>
                            <li className="mt-4"><AiFillMediumSquare/> Modelo: {item.modelo}</li>
                            <li className="mt-4"><AiFillDatabase/> Capacidad: {item.capacidad}</li>

                        </ul>
                    
					<h4 className="mt-4"> Precio: ${item.precio}</h4>
					<h5 className="mt-4 mb-4"> Stock: {item.stock}</h5>
					{
						item.stock >= 1 ? <ItemCount  stock={item.stock} initial={1} onAdd={handleAddProduct}/> : null
					}
					
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
