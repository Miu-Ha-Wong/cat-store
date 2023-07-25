import styles from "./Pages.module.css";
import Products from "./Products";
import { useState } from "react";

const Filter = (props) => {
  const { toyItem, title } = props;

  const [filter, setFilter] = useState(toyItem);

  const filterHandler = (event) => {
    const filter = event.target.value;
    if (filter === "filter1") {
      const orderArr = [...toyItem].sort((a, b) => a.price - b.price);
      setFilter(orderArr);
    }
    if (filter === "filter2") {
      const orderArr = [...toyItem].sort((a, b) => b.price - a.price);
      setFilter(orderArr);
    }
  };

  const toyItemMap = filter.map((item) => {
    return (
      <Products
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        overlayImage={item.overlayImage}
      />
    );
  });

  const amount = toyItem.length;

  return (
    <div className={styles.centerContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.amount}>{amount} Products</div>
          <div>
            <label className={styles.selectLabel} htmlFor="filter">
              Sort by
            </label>
            <select
              className={styles.selectElement}
              onChange={filterHandler}
              id="filter"
            >
              <option value="">--Select--</option>
              <option value="filter1">Price: low to hight</option>
              <option value="filter2">Price: hight to low</option>
            </select>
          </div>
        </div>
        <div className={styles.productContainer}>{toyItemMap}</div>
      </div>
    </div>
  );
};

export default Filter;
