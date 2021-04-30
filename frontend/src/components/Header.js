import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<header className='bg-warning text-dark'>
			<Container>
				<Navbar variant='light'>
					<LinkContainer to='/'>
						<Navbar.Brand>Likhith Store</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/features'>
								<Nav.Link>Features</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/pricing'>
								<Nav.Link>Pricing</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
