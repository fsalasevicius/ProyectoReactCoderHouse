import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carrito from "./components/Ventas/Carrito";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Ventas/Checkout";
import CartProvider from "./context/context";
import DiscoSsd from "./components/tipo/DiscoSsd";
import Monitores from "./components/tipo/Monitores";
import Otros from "./components/tipo/Otros";
import './scss/app.scss';
function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Navbar />
				<Switch>

					<Route path="/" exact>
						<Home />
						<ItemListContainer />
						<Footer/>
					</Route>

					<Route path="/productos">
						<ItemListContainer />
						<Footer/>
					</Route>
					<Route path="/ItemsDetailContainer/:id">
						<ItemDetailContainer  />
						<Footer/>
					</Route>
					
						<Route path="/discossd">
						 <DiscoSsd  tipo="Discos"/>
						 <Footer/>
						</Route>
						
						<Route path="/monitores">
							<Monitores  tipo="Monitores"/>
							<Footer/>
						</Route>
						<Route path="/otros">
							<Otros tipo="Otros"/>
							<Footer/>
						</Route>

					<Route path="/checkout">
						<Checkout/>
					</Route>

					<Route path="/carrito">
						<Carrito />
					</Route>
				</Switch>
				
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
