import React from 'react';
import { Button, Row, Image, Col, ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {
	const product = products.find((p) => p._id === match.params.id);
	return (
		<>
			<Link to='/'>
				<Button className='btn btn-light my-3' variant='light'>
					Home
				</Button>
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={product.rating} text={`${product.numReviews}`} />
						</ListGroup.Item>
						<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
						<ListGroup.Item>Description: {product.description}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Availability:</Col>
									<Col>
										{product.countInStock > 0 ? 'IN STOCK' : 'OUT OF STOCK'}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className='btn btn-block'
									variant='dark'
									disabled={product.countInStock === 0}>
									ADD TO CART
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
