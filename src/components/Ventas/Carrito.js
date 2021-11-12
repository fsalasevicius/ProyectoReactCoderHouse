import React from "react";
import { useCartContext } from "../../context/context";
import {Link} from 'react-router-dom';
import accounting from "accounting";
import { FaTrashAlt } from "react-icons/fa";

const Carrito = () => {
	const { cart, precioTotal, removeItem, clearCart } = useCartContext();

	return (
		<>
		<div className="col-12 mt-5">
			<h2 className="text-center">Carrito</h2>
		</div>
		<div className="card col-12">
			<div className="row">
				<div className="col-lg-12 shadow-lg pt-3 ms-auto">
					{precioTotal === 0 ? (
						<>
						<h2 className="text-center">Su carrito se encuentra vacio</h2>
						<img src="https://magios-team.com.ar/img/productos/carrito-vacio.jpg" alt="Imagen Carrito Vacio" className="col-4 d-flex  text-center"  />
						</>
					) : null}

					{cart.map((product, i) => (
						<div className="row mt-3" key={i}>
							<div className="col-lg-2">
								<img src={product.item.picture} alt="" className="img-fluid" />
							</div>
							<div className="col-lg-2 text-center">
								<h5>{product.item.nombre}</h5>
							</div>
							<div className="col-lg-2 text-center d-flex align-items-center">
								<h5>Precio: ${product.item.precio}</h5>
							</div>
							<div className="col-lg-2 text-center d-flex align-items-center">
								<h5>Cantidad: {product.cantidad}</h5>
							</div>
							<div className="col-lg-2 text-center d-flex align-items-center">
								<h5>Subtotal: ${product.item.precio * product.cantidad}</h5>
							</div>
							<div className="col-lg-2 mb-4 d-flex align-items-center">
								<button
									onClick={() =>
										removeItem(
											product.item.id,
											precioTotal,
											product.cantidad
											
										)
									}
									className="btn btn-danger bg-danger"
								>
									<FaTrashAlt className="mb-1" />
								</button>
							</div>
							
						</div>
					))}
					
				</div>

			</div>
		</div>
		<div className="col-lg-4 shadow-lg ms-auto pt-4">
					{cart.length > 0 && (
						<>
							<h3>Total a pagar: {accounting.formatMoney(precioTotal)}</h3>
							<Link to="/checkout" className="btn btn-success d-block w-100 mt-4">Ir a finalizar Compra</Link>
							<button className="btn btn-danger btn-sm mt-3 mb-3" onClick={clearCart}>
								Vaciar carrito
							</button>
						</>
					)}
		</div>
		</>
	);
};

export default Carrito;
