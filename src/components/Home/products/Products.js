import ProductItem from "./ProductItem";
import styles from "./Products.module.css";
import ProductData from "../../../data/ProductData";

const Products = () => {
  const poppularProduct = ProductData().TOY_ITEMS.filter((item) => {
    return item.poppular === true;
  });

  const toyItem = poppularProduct.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        name={item.name}
        features={item.features}
        price={item.price}
        image={item.image}
        overlayImage={item.overlayImage}
      />
    );
  });

  return (
    <main className={styles.centerContainer}>
      <div id="shopNow" className={styles.title}>
        BEST SELLING PRODUCTS
      </div>
      <div className={styles.container}>{toyItem}</div>
    </main>
  );
};

export default Products;
