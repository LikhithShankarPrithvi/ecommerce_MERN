import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Container className='p-3 mb-2 bg-dark text-white text-center'>
					<h1>Welcome</h1>
				</Container>
				<Container className='p-3 mb-2 bg-warning text-dark'>
					<h1>Hello my name is Shankar</h1>
					<Row className='p-3 mb-2 bg-dark text-white'>
						<h1>Hello my name is Shankar</h1>
					</Row>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
