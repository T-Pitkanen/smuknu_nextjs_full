'use client';

//Context API provides a way to pass data through the component tree without having to pass props manually at every level.
//It's designed to share data that can be considered "global" for a tree of React components, such as the currently authenticated user, theme, or preferred language.

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

	//addToBasket, changeProductAmount, and removeFromBasket
	//manipulate the basket state and synchronize it with localStorage.

	const addToBasket = (id, amount = 1) => {
		//retrieve the basket items from local storage
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

	//updates the quantity of a specific product in a shopping basket, both in the local storage and in the component's state.
	const changeProductAmount = (id, newAmount) => {
		let basket = JSON.parse(localStorage.getItem('basket'));
		//find the index of the product with the matching id
		const productIndex = basket.findIndex((item) => item.id === id);

		//if the product is found, update the amount and store the new basket in local storage
		if (productIndex >= 0) {
			basket[productIndex].amount = newAmount;
			localStorage.setItem('basket', JSON.stringify(basket));
			setBasket(basket);
		}
	};

	const removeFromBasket = (id) => {
		//retrieves the item with the 'basket' key from local storage, parses it, and converts it to a JavaScript object/array.
		let basket = JSON.parse(localStorage.getItem('basket'));
		//filters out the item with the matching id, resulting in a new array without the removed item.
		basket = basket.filter((item) => item.id !== id);
		//converts the new array back to a JSON string and stores it in local storage.
		localStorage.setItem('basket', JSON.stringify(basket));
		//updates the basket state with the new array.
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
