'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useBasket } from '@/context/basket';
import styles from './page.module.css';

const ProductPage = ({ params }) => {
	const { basket, addToBasket } = useBasket();
	const [product, setProduct] = useState(null);
	const { id } = params;
	const { range } = params;

	useEffect(() => {
		const getProduct = async () => {
			const response = await fetch(
				`http://localhost:3000/api/products?id=${id}`
			);
			const data = await response.json();
			setProduct(data);
		};

		if (id) {
			getProduct();
		}
	}, [id]);

	return (
		<div className={styles.pageWrapper}>
			<img
				className={styles.image}
				src={product.image}
				alt={product.title}
				width={300}
				height={300}
			/>
			<h1 className={styles.title}>{product.title}</h1>
			<p className={styles.description}>{product.description}</p>
			<p className={styles.price}> {product.price} kr.</p>
			<button
				className={styles.btn}
				onClick={(e) => {
					e.preventDefault();
					addToBasket(product._id);
				}}
			>
				KØB
			</button>
		</div>
	);
};

export default ProductPage;
