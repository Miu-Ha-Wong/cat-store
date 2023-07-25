import React, { useRef } from "react";
import styles from "./YouMayLikeProduct.module.css";
import ProductData from "../../../data/ProductData";
import RandomProduct from "./RandomProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const YouMayLikeProduct = () => {
  const containerRef = useRef(null);

  let randomProduct = [];
  for (let i = 0; i < 10; i++) {
    let randomID = `m${
      Math.floor(Math.random() * ProductData().TOY_ITEMS.length) + 1
    }`;

    const product = ProductData().TOY_ITEMS.find((product) => {
      return product.id === randomID;
    });

    if (product) {
      const existingItem = randomProduct.find((item) => item.id === randomID);
      if (!existingItem) {
        randomProduct.push(product);
      } else {
        i--;
      }
    } else {
      i--;
    }
  }

  const randomItem = randomProduct.map((product) => {
    return (
      <RandomProduct
        key={product.id}
        id={product.id}
        name={product.name}
        features={product.features}
        price={product.price}
        image={product.image}
        overlayImage={product.overlayImage}
      />
    );
  });

  const scrollToLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    }
  };

  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>You May Like </div>
      <div className={styles.rollBarContainer}>
        <button className={styles.leftBtn} onClick={scrollToLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.productContainer} ref={containerRef}>
          {randomItem}
        </div>
        <button className={styles.rightBtn} onClick={scrollToRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default YouMayLikeProduct;
