import { Link } from "react-router-dom";
import styles from "./RandomProduct.module.css";

const RandomProduct = (props) => {
  const { overlayImage, image, name, price, id } = props;

  return (
    <div className={styles.constainer}>
      <div className={styles.productCard}>
        <div className={styles.imgs}>
          <Link to={`/product/${id}`} className={styles.overlay}>
            <img
              className={styles.overlayImage}
              src={`../toy_items/${overlayImage}`}
              alt="overlay cat"
            />
            <div className={styles.view}>VIEW MORE</div>
          </Link>

          <img
            className={styles.itemImage}
            src={`../toy_items/${image}`}
            alt="cat item"
          />
        </div>
        <div className={styles.name}>{name}</div>

        <div className={styles.priceIconContainer}>
          <div className={styles.price}>${price}</div>
        </div>
      </div>
    </div>
  );
};
export default RandomProduct;
