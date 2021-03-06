import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { Col, Container, Row } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])
	return (
		<>
			<Container>
				<h1 className='my-3'> Latest Products</h1>
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h3>{error}</h3>
				) : (
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
								{/* <h3>{product.name}</h3> */}
							</Col>
						))}
					</Row>
				)}
			</Container>
		</>
	)
}

export default HomeScreen
