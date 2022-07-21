import React from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { Header } from './components/Header'
import { Employees } from './components/employees/Employees'
import { Services } from './components/services/Services'
import { pierogi } from './data/pierogi'
import { cooks } from './data/cooks'
import { Footer } from './components/Footer'

function App() {
	return (
		<main>
			<Nav />
			<Header />
			<Employees employeeData={cooks} />
			<Services offers={pierogi} />
			<Footer />
		</main>
	)
}

export default App
