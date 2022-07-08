import React from "react";
import { oferty } from "../../data/oferta";
import { Box } from "./Box";

export const Services = () => {
	return (
		<section id="oferta" class="offer-sec">
			<h2>Czym zajada się nasza firma?</h2>
			<div class="offer-sec-box">
				{oferty.map((el, index) => (
					<Box key={index} {...el} />
				))}
			</div>
		</section>
	);
};
