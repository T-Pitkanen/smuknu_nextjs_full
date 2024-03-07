import { useBasket } from '@/context/basket';
import styles from './basket.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const Basket = () => {
	const { basket, name } = useBasket();
	const [basketItems, setBasketItems] = useState([]);

	useEffect(() => {
		const getProductByRange = async () => {
			// Finder alle id´er.
			let idRange = basket.map((item) => item.id);

			console.log('ID Range', basket, idRange);

			if (idRange.length > 0) {
				let products = await fetch('api/products?range=' + idRange);
				products = await products.json();

				products.map((product) => {
					console.log('PRODUCT', product);
					let basketAmount = basket.find((item) => item.id === product._id);

					if (basketAmount) {
						product.amount = basketAmount.amount;
					}
				});

				setBasketItems(products);
			}
		};

		getProductByRange();
	}, [basket]);

	return (
		<div className={styles.container}>
			{basketItems.map((basketItem) => {
				return (
					<div key={basketItem._id} className={styles.item}>
						<Image
							src={basketItem.image}
							alt={basketItem.title}
							width={50}
							height={50}
							className={styles.image}
						/>
						<span className={styles.title}>{basketItem.title}</span>
						<span className={styles.amount}>{basketItem.amount}</span>
						<span className={styles.total}>
							{basketItem.amount * basketItem.price} <span>dkk</span>
						</span>
					</div>
				);
			})}
			<div className={styles.totalPrice}>
				Total:{' '}
				{basketItems.reduce(
					(total, item) => total + item.price * item.amount,
					0
				)}{' '}
				dkk
			</div>
		</div>
	);
};
export default Basket;