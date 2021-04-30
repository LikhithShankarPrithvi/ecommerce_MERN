import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products')

			setProducts(data)
		}

		fetchProducts()
	}, [])
	return (
		<>
			<Container>
				<h1 className='my-3'> Latest Products</h1>
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
							{/* <h3>{product.name}</h3> */}
						</Col>
					))}
				</Row>
			</Container>
		</>
	)
}

export default HomeScreen
