import React from 'react'
import { Box } from './Box'

export const Services = offers => {
	const offersData = offers.offers
	return (
		<section id='oferta' className='offer-sec'>
			<h2>Czym zajada się nasza firma?</h2>
			<div className='offer-sec-box'>
				{offersData.map((el, index) => (
					<Box key={index} {...el} />
				))}
			</div>
		</section>
	)
}
