import React, { useState } from "react";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firebase";
import { useCartContext } from "../../context/context";
import styled from "styled-components";
import ProductosCheckout from "./ProductosCheckout";
import Formcheckout from "./Formcheckout";
import accounting from "accounting";

const DivCheckout = styled.div`
	font-family: "Source Sans Pro", sans-serif;
`;
const Mtop = styled.div`
	margin-top: 15%;
`;

const Checkout = () => {
	const { precioTotal } = useCartContext();
	const [nombre, setNombre] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const { cart, clearCart } = useCartContext();
	const [orderId, setOrderId] = useState();

	const manejarCompra = (e) => {
		e.preventDefault();
		const datosCompra = {
			comprador: {
				name: nombre,
				phone: telefono,
				email: email,
			},
			date: firebase.firestore.FieldValue.serverTimestamp(),
			items: cart,
			total: precioTotal,
		};

		const db = getFirestore();
		const OrderCollection = db.collection("orders");

		const ordenes = async () => {
			try {
				const pregunta = await OrderCollection.add(datosCompra);
				const respuesta = pregunta.id;
				clearCart();
				setOrderId(respuesta);
			} catch (error) {
			}
		};
		ordenes();

		const itemsUpdate = db.collection("items").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cart.map((i) => i.item.id)
		);

		const updateStock = async () => {
			const query = await itemsUpdate.get();
			const batch = db.batch();
			query.docs.forEach((docSnapshot, idx) => {
				batch.update(docSnapshot.ref, {
					stock: docSnapshot.data().stock - Number(cart[idx].cantidad),
				});
			});
			batch.commit();
		};

		updateStock();
	};

	return (
		<DivCheckout className="container">
			<div className="row">
				{
					orderId ? (
						<>
							<Mtop className="text-center">
								<h3 className="fs-1">Su compra se efectuo con exito, Muchas gracias por comprar en Magios-Team.</h3>
								<p className="fs-4">
									Tu numero de pedido es: <strong>{orderId}</strong>{" "}
								</p>
								<p className="fs-4">Proximamente un asesor se contactara  via e-mail para indicarte el codigo de seguimiento para que sigas el estado de tu producto.😄</p>
							</Mtop>
						</>
					) : (
						<>
							<Formcheckout
								manejarCompra={manejarCompra}
								setNombre={setNombre}
								setTelefono={setTelefono}
								setEmail={setEmail}
								nombre={nombre}
								telefono={telefono}
								email={email}
							/>
							<div className="col-lg-4 shadow-lg p-3 ms-2 bg-body carrito margin-form ">
								<h3>Detalle de tu compra:</h3>
								<ProductosCheckout cart={cart} />
								<h5>Envío Gratis</h5>
								{precioTotal ? (
									<h4>Subtotal: {accounting.formatMoney(precioTotal)}</h4>
								) : null}
							</div>
						</>
					)
				}
			</div>
		</DivCheckout>
	);
};

export default Checkout;
