import React from 'react'

export const Employee = ({ name, lastName, position, description, imgSrc, imgAlt }) => {
	return (
		<div className='spec'>
			<div className='spec-circle'>
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<div className='spec-desc'>
				<h3>
					{name}
					{lastName}
					{position}
				</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
