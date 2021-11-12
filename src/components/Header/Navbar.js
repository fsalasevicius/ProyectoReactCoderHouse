import React from "react";
import  logo  from '../../img/logo.png'
import CartWidget from "./CartWidget";

import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

	return (
		<header>
			      <div className="fixed">
        <nav className="menu">
          <div className="logo">
            <Link to="/">
              <div className="d-flex">   
                <img src={logo} alt="Logo de la empresa" />
			        	<h4 className="text-titulo">Magios-Team</h4>
              </div>
            </Link>
          </div>

          <ul className="enlaces">
            <li>
			  <NavLink to="/discossd" className="nav-link active">
                Discos SSD
              </NavLink>
            </li>
            <li>
              <NavLink to="/monitores" className="nav-link active">
                Monitores
              </NavLink>
            </li>
            <li>
              <NavLink to="/otros" className="nav-link active">
                Otros
              </NavLink>
            </li>
          </ul>

		  <NavLink to="/carrito" className="ms-auto">
						<CartWidget />
		  </NavLink>

        </nav>
      </div>

		</header>
	);
};

export default Navbar;
