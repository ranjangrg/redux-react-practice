import React from 'react';

import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<nav className="App-navbar"> 
				<Link to="/home"> Home </Link>
				<Link to="/projects"> Projects </Link>
				<Link to="/settings"> Settings </Link>
				<Link to="/contact"> Contact </Link>
			</nav>
		)
	}
}

export default Navbar;
