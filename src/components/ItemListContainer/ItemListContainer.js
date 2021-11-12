import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../firebase";

export default function ItemListContainer({tipo=null}) {

	const [products, setproducts] = useState([]);
	const db = getFirestore();

	useEffect(() => {
		const GetItems = async () => {
			if (!tipo) {
					let arr = [];
					const pregunta = await db.collection("items").get();
					pregunta.forEach((doc) => {
						arr.push({ id: doc.id, data: doc.data() });
					});
					setproducts(arr);
				
			}else{
				
					let arr = [];
					const pregunta = await db.collection("items").where('tipo', '==',tipo)
					.get();
					pregunta.forEach((doc) => {
						arr.push({ id: doc.id, data: doc.data() });
					});
					setproducts(arr);
				
			}
			
		};
		GetItems();
	}, [db]);

	return (
		<div>
			<ItemList products={products} />
		</div>
	);
}
