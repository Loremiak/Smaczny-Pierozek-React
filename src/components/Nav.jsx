import React from "react";

export const Nav = () => {
	return (
		<nav class="nav-bar">
			<p>Smaczny Pierożek</p>
			<ul class="nav-list">
				<li>
					<a href="#o-nas">o nas</a>
				</li>
				<li>
					<a href="#oferta">oferta</a>
				</li>
				<li class="cursor-disable">kontakt</li>
			</ul>
		</nav>
	);
};
