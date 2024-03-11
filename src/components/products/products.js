/*"use client";
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import Product from "./product/product";
import Header from "../header/header";

const Products = ({ headline, recommend }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);


  return (
    <div className={styles.products}>
      <Header
        text={{
          one: {
            text: "UDVALGT",
            color: "#000",
          },
          two: {
            text: "SKØNHED",
            color: "#fa96aa",
          },
        }}
      ></Header>

      {products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </div>
  );
};
export default Products;
*/

"use client";

import { useEffect, useState } from "react";
import styles from "./products.module.css";
import Product from "./product/product";
import Header from "../header/header";

const Products = ({ recommend }) => {
  const [products, setProducts] = useState([]);
  const [recommended, setRecommeded] = useState(recommend);


  const showAllProducts = () => {
		return products.length !== 0
			? products.map((product, index) => (
					<div key={index} className={styles.product}>
						<Product
							key={index}
							product={product}
							
						></Product>
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
      const response = await fetch("/api/products");
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