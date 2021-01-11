import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className='p-3 bg-dark text-white'>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						Copyright &copy; LikhithShankar
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
