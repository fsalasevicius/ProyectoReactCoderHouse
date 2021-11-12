import React from "react";

import {
	AiOutlineInstagram,
	AiFillFacebook,
	AiOutlineMail,
	AiOutlinePhone
} from "react-icons/ai";
const Footer = () => {
	return (
		<footer>
		<div className="row">
		  <div className="col-8 col-md-6 nombreTienda">
			<p>©2021 Magios-Team - Todos los derechos reservados</p>
		  </div>
		  <div className="col-4 col-md-6 redes">
			<AiFillFacebook className="icons" />
			<AiOutlineInstagram className="icons"/>
			<AiOutlineMail className="icons"/>
			<AiOutlinePhone className="icons"/>
		  </div>
		</div>
	  </footer>
	);
};

export default Footer;

