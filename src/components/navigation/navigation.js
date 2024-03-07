'use client';
import { useState } from 'react';
import styles from './navigation.module.css';
import { FaBars, FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import { useBasket } from '@/context/basket';
import Basket from '../basket/basket';
import Image from 'next/image';

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [basketOpen, setBasketOpen] = useState(false);

	const { basket, name } = useBasket();

	const handleToggleMenu = () => {
		setBasketOpen(false);
		setMenuOpen(!menuOpen);
	};

	const handleToggleBasket = () => {
		setMenuOpen(false);
		setBasketOpen(!basketOpen);
	};

	const handleCloseMenus = () => {
		setMenuOpen(false);
		setBasketOpen(false);
	};

	const menuActive = menuOpen ? styles.active : null;
	const basketActive = basketOpen ? styles.active : null;

	const totalItems = basket.reduce((total, item) => total + item.amount, 0);

	return (
		<div className={styles.navigation}>
			<div className={styles.navigationBar}>
				<div>
					<Link href="/">
						{' '}
						<Image
							className={styles.logo}
							src="/logo/smuknu_logo.png"
							alt="Logo"
							width={500}
							height={300}
						/>
					</Link>
				</div>

				<div className={styles.actions}>
					<div onClick={handleToggleBasket} className={styles.cart}>
						<FaCartShopping />
						<div className={styles.cartCount}>{totalItems}</div>
					</div>
					<div onClick={handleToggleMenu}>
						<FaBars className={styles.bars}/>
					</div>
				</div>
			</div>

			<div className={`${styles.menuPane}`}>
				<div
					className={`${styles.menu} ${menuActive}`}
					onClick={handleCloseMenus}
				>
					<Link href="/">Home</Link>
					<Link href="/products">Produkter</Link>
				</div>

				<div className={`${styles.basket} ${basketActive}`}>
					<Basket></Basket>
				</div>
			</div>
		</div>
	);
};
export default Navigation;