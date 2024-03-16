"use client";
import Image from "next/image";
import styles from "./product.module.css";
import { useBasket } from "@/context/basket";
import Link from "next/link";

const PercentBox = ({ percent }) => {
  return percent ? (
    <div className={styles.discount}>
      <div className={styles.discountText}>SPAR</div>
      <div className={styles.discountPercent}>{percent}%</div>
    </div>
  ) : (
    ""
  );
};

const Product = ({ product }) => {
  const { basket, addToBasket } = useBasket();

  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <PercentBox
          percent={product.discountInPercent ? product.discountInPercent : 0}
        ></PercentBox>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
        />
        <div className={styles.details}>
          <h3>{product.title}</h3>
        </div>
        <div className={styles.actions}>
          <p className={styles.price}>{product.price} kr.</p>
          <button
            className={styles.fbBtn}
            onClick={(e) => {
              e.preventDefault();
              addToBasket(product._id);
            }}
          >
            KØB
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
