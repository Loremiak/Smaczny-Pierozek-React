import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Employees } from "./components/Employees";
import { Services } from "./components/services/Services";
import { Footer } from "./components/Footer";

function App() {
	return (
		<main>
			<Nav />
			<Header />
			<Employees />
			<Services></Services>
			<Footer />
		</main>
	);
}

export default App;
