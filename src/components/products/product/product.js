'use client';
import Image from 'next/image';
import styles from './product.module.css';
import { useBasket } from '@/context/basket';
const Product = ({ product }) => {
	const { basket, addToBasket } = useBasket();

	return (
		<div className={styles.product}>
			<Image src={product.image} alt={product.title} width={300} height={300} />
			<div className={styles.details}>
				<h3>{product.title}</h3>
			</div>
			<div className={styles.actions}>
				<p className={styles.price}>{product.price} kr.</p>
				<button
					className={styles.fbBtn}
					onClick={() => addToBasket(product._id)}
				>
					KØB
				</button>
			</div>
		</div>
	);
};
export default Product;