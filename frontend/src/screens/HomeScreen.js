import React from 'react';
import Product from '../components/Product';
import { Col, Container, Row } from 'react-bootstrap';
import products from '../products';

const HomeScreen = () => {
	return (
		<>
			<Container>
				<h1 className='my-3'> Latest Products</h1>
				<Row>
					{products.map((product) => (
						<Col sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
							{/* <h3>{product.name}</h3> */}
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default HomeScreen;
