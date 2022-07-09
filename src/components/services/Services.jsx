import React from "react";
import { offerts } from "../../data/offerts";
import { Box } from "./Box";

export const Services = () => {
	return (
		<section id="oferta" className="offer-sec">
			<h2>Czym zajada się nasza firma?</h2>
			<div className="offer-sec-box">
				{offerts.map((el, index) => (
					<Box key={index} {...el} />
				))}
			</div>
		</section>
	);
};
