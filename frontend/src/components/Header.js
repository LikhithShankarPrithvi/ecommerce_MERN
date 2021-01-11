import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<header className='bg-warning text-dark'>
			<Container>
				<Navbar variant='light'>
					<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link>
					</Nav>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
