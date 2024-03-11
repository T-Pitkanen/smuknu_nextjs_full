

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useBasket } from '@/context/basket';


const ProductPage = ({ params }) => {
    const { basket, addToBasket } = useBasket();
    const [product, setProduct] = useState(null);
    const { id } = params;
    const { range } = params;

    useEffect(() => {
        const getProduct = async () => {
            
            const response = await fetch(`http://localhost:3000/api/products?id=${id}`);
            const data = await response.json();
            setProduct(data);
        };
    
        if (id) {
            getProduct();
        }
    }, [id]);

   

   
    if (!product) return <div>Loading...</div>;

    return (
        <div className={`page-wrapper`}>
            <h1>{product.title}</h1>
         
            <img src={product.image} alt={product.title} width={300} height={300} />
            <p>{product.description}</p>
            <p>Price: {product.price} kr.</p>
            <p>Discount: {product.discountInPercent ?? 0}%</p>
            <button
            
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
