import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<Container className='p-3 mb-2 bg-dark text-white'>
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
