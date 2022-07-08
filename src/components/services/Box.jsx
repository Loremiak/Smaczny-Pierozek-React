import React from "react";

export const Box = ({ imgSrc, imgAlt, title, isNew }) => {
	return (
		<div class="box">
			<img src={imgSrc} alt={imgAlt} />
			{isNew ? <span class="new"></span> : null}
			<div>
				<p>{title}</p>
			</div>
		</div>
	);
};
