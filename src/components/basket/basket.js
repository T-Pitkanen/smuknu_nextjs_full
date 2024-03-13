/*import { useBasket } from '@/context/basket';
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
export default Basket;*/

import { useBasket } from '@/context/basket';
import styles from './basket.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Basket = () => {
	const { basket, changeProductAmount, removeFromBasket } = useBasket();
	const [basketItems, setBasketItems] = useState([]);

	useEffect(() => {
		const getProductByRange = async () => {
			let idRange = basket.map((item) => item.id);

			if (idRange.length > 0) {
				let products = await fetch('api/products?range=' + idRange);
				products = await products.json();

				products.map((product) => {
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

	const handleAmountChange = (id, delta) => {
		const item = basket.find((item) => item.id === id);
		if (item) {
			const newAmount = item.amount + delta;
			if (newAmount > 0) {
				changeProductAmount(id, newAmount);
			}
		}
	};

	const handleRemove = (id) => {
		removeFromBasket(id);
		setBasketItems(basketItems.filter((item) => item._id !== id));
	};

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
						<button
							className={styles.decreaseBtn}
							onClick={() => handleAmountChange(basketItem._id, -1)}
						>
							-
						</button>
						<span className={styles.amount}>{basketItem.amount}</span>
						<button
							className={styles.addBtn}
							onClick={() => handleAmountChange(basketItem._id, 1)}
						>
							+
						</button>
						<span className={styles.total}>
							{basketItem.amount * basketItem.price} <span>dkk</span>
						</span>
						<button
							className={styles.removeBtn}
							onClick={() => handleRemove(basketItem._id)}
						>
							Remove
						</button>
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
