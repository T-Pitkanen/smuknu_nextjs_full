'use client';

import { useEffect, useState } from 'react';
import styles from './products.module.css';
import Product from './product/product';
import { API_BASE_URL } from '@/config/apiConfig';

const Products = ({ recommend }) => {
	const [products, setProducts] = useState([]);
	const [recommended, setRecommeded] = useState(recommend);

	const showAllProducts = () => {
		return products.length !== 0
			? products.map((product, index) => (
					<div key={index} className={styles.product}>
						<Product key={index} product={product}></Product>
					</div>
			  ))
			: null;
	};

	const showRecommendedProducts = () => {
		return products.length !== 0
			? products
					.filter((p) => p.recommended)
					.map((product, index) => (
						<div key={index} className={styles.product}>
							<Product product={product}></Product>
						</div>
					))
			: null;
	};

	useEffect(() => {
		const getProducts = async () => {
			const response = await fetch(`${API_BASE_URL}/products`);
			const data = await response.json();
			setProducts(data);
		};

		getProducts();
	}, []);

	return (
		<div className={styles.products} id="selected">
			<div className={styles.list}>
				{recommended ? showRecommendedProducts() : showAllProducts()}
			</div>
		</div>
	);
};

export default Products;
