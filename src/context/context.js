import { useContext, useState, createContext, useEffect } from "react";
import firebase from "firebase";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {


	const [cart, setCart] = useState([]);

	const [totalQty, setTotalQty] = useState(0);

	const [precioTotal, setPrecioTotal] = useState(0);

	const [userName, setUserName] = useState("");

	

	useEffect(() => {
		if (localStorage.getItem("Carrito Magios")) (
			setCart(JSON.parse(localStorage.getItem("Carrito Magios")))
        )
	}, []);


	useEffect(() => {
		localStorage.setItem("Carrito Magios", JSON.stringify(cart));
		let qty = 0;
		let price = 0;
		cart.map((item) => (
            setTotalQty((qty += item.cantidad)),
			setPrecioTotal((price += item.cantidad * item.item.precio))
        ));
	}, [cart]);


	const addToCart = (item, qty) => {
		const repeated = cart.findIndex(
			(product) => product.item.id === item.item.id
		);

		setTotalQty(totalQty + qty);

		if (repeated !== -1) {
			const newArray = Array.from(cart);
			cart[repeated].cantidad += item.cantidad;
			setCart(newArray);
		} else {
			setCart([...cart, item]);
			setPrecioTotal(precioTotal + item.cantidad * item.item.precio);
		}
	};

	const removeItem = (id, precio, qty) => {
		const arrayAfterDelete = cart.filter((product) => product.item.id !== id);

		setCart(arrayAfterDelete);

		setTotalQty(totalQty - qty);

		setPrecioTotal(precioTotal - precio);
	};

	const clearCart = () => {
		setCart([]);
		setTotalQty(0);
		setPrecioTotal(0);
	};

	const googleProvider = new firebase.auth.GoogleAuthProvider();

	const autenticacion = async () => {
		const google = await firebase.auth().signInWithPopup(googleProvider);
		setUserName(google.user.displayName);
	};

	

	return (
		<CartContext.Provider
			value={{
				cart,
				totalQty,
				precioTotal,
				userName,
				addToCart,
				removeItem,
				clearCart,
				autenticacion,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
