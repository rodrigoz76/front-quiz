import React, { Component } from 'react';

import './style.scss';
import logo from './logo.png';

class Header extends Component {

 render() {
 	return(
 		<div className="Encabezado">
 			<img id="levisLogo" src={logo} alt="Levi's Logo"/>
 			<div className="menuContainer">
	 			<ul className="mainMenu">
	 				<li className="mainMenuLi">
	 					<a htref="#"><h4>HOMBRE</h4></a>
	 					<ul className="mainSubmenu">
	 						<li className="mainSubmenuLi">Jeans</li>
	 						<li className="mainSubmenuLi">Remeras</li>
	 					</ul>
	 				</li>
	 				<li className="mainMenuLi">
	 					<a htref="#"><h4>MUJER</h4></a>
	 					<ul className="mainSubmenu">
		 					<li className="mainSubmenuLi">Jeans</li>
		 					<li className="mainSubmenuLi">Remeras</li>
						</ul>
		 			</li>
	 			</ul>
	 		</div>
 			<a className="headerContacto" htref="#" title="contacto"><h4>CONTACTO</h4></a>
 			<form>
				<div className="headerSearch">
    				<input type="search" id="buscador" name="q"/>
    				<button>BUSCAR</button>
  				</div>
			</form>
 		</div>
 	);
 }

}

export default Header;