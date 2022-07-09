import React from "react";

export const Employer = ({ name, lastName, position, description, imgSrc }) => {
	return (
		<div className="spec">
			<div className="spec-circle">
				<img src={imgSrc} alt="" />
			</div>
			<div className="spec-desc">
				<h3>
					{name}
					{lastName}
					{position}
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
