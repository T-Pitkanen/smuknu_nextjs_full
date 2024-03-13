'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
	const [basket, setBasket] = useState([]);
	const [name, setName] = useState('Name');

	//loading basket from local storage
	useEffect(() => {
		const basket = localStorage.getItem('basket');
		if (basket) {
			setBasket(JSON.parse(basket));
		}
	}, []);

	//addToBasket, changeProductAmount, and removeFromBasket manipulate the basket state and synchronize it with localStorage.
	const addToBasket = (id, amount = 1) => {
		let basket = localStorage.getItem('basket');

		if (basket) {
			basket = JSON.parse(basket);
			const existingProductIndex = basket.findIndex((item) => item.id === id);

			if (existingProductIndex >= 0) {
				basket[existingProductIndex].amount += amount;
			} else {
				basket.push({
					id: id,
					amount: amount,
				});
			}
		} else {
			basket = [
				{
					id: id,
					amount: amount,
				},
			];
		}

		localStorage.setItem('basket', JSON.stringify(basket));
		setBasket(basket);
	};

	const changeProductAmount = (id, newAmount) => {
		//retrieve the basket items from local storage
		let basket = JSON.parse(localStorage.getItem('basket'));
		//find the index of the product with the matching id
		const productIndex = basket.findIndex((item) => item.id === id);

		//if the product is found, update the amount
		if (productIndex >= 0) {
			basket[productIndex].amount = newAmount;
			localStorage.setItem('basket', JSON.stringify(basket));
			setBasket(basket);
		}
	};

	const removeFromBasket = (id) => {
		let basket = JSON.parse(localStorage.getItem('basket'));
		basket = basket.filter((item) => item.id !== id);
		localStorage.setItem('basket', JSON.stringify(basket));
		setBasket(basket);
	};

	return (
		<BasketContext.Provider
			value={{
				basket,
				addToBasket,
				changeProductAmount,
				removeFromBasket,
				name,
			}}
		>
			{children}
		</BasketContext.Provider>
	);
};

export const useBasket = () => useContext(BasketContext);
