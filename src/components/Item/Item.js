import accounting from "accounting";
import React from "react";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, picture}) => {
	return (
		<div className="col-lg-3 card-div">
			<div className="card border-0 shadow">
				<img src={picture} alt={nombre} className="card-img-top" />
				<div className="card-body text-center">
					<h5 className="card-title">{nombre}</h5>
					<h5 className="text-center">{accounting.formatMoney(precio)}</h5>
					<Link to={`/ItemsDetailContainer/${id}`}>
						<button className="btn btn-dark mb-3 mt-2">
							<FiEye className="icono-detalles"/>
							Ver
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Item;