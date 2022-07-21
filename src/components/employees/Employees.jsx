import React from 'react'
import { Employee } from './Employee'

export const Employees = employeeData => {
	const ourCooks = employeeData.employeeData
	return (
		<section id='o-nas' className='specialist-sec'>
			<h1>Nasze kucharzyny</h1>
			{ourCooks.map((el, index) => (
				<Employee
					key={index}
					imgSrc={el.imgSrc}
					imgAlt={el.imgAlt}
					name={el.name}
					lastName={el.lastName}
					position={el.position}
					description={el.description}
				/>
			))}
		</section>
	)
}
