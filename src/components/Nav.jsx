import React from "react";

export const Nav = () => {
	return (
		<nav className="nav-bar">
			<p>Smaczny Pierożek</p>
			<ul className="nav-list">
				<li>
					<a href="#o-nas">o nas</a>
				</li>
				<li>
					<a href="#oferta">oferta</a>
				</li>
				<li className="cursor-disable">kontakt</li>
			</ul>
		</nav>
	);
};
