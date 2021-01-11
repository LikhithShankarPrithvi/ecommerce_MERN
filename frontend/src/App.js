import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<HomeScreen />
				</Container>
				<Container className='p-3 mb-2 bg-warning text-dark'>
					<h1>Hello my name is Shankar</h1>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
