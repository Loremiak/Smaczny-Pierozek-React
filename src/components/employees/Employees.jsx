import React from "react";
import { employees } from "../../data/employees";
import { Employer } from "./Employer";

export const Employees = () => {
	return (
		<section id="o-nas" className="specialist-sec">
			<h1>Nasze kucharzyny</h1>
			{employees.map((el, index) => (
				<Employer
					key={index}
					imgSrc={el.imgSrc}
					name={el.name}
					lastName={el.lastName}
					position={el.position}
					description={el.description}
				/>
			))}
		</section>
	);
};
