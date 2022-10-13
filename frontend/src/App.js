import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";

function App() {
	return (
		<div>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/home" component={HomeScreen} exact />
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
