import styles from "./Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import { Link } from "react-router-dom";

const Products = (props) => {
  const { id, name, price, image, overlayImage } = props;
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({ id, name, price, image, quantity: 1 })
    );
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imgs}>
        <Link to={`/product/${id}`} className={styles.overlay}>
          <img
            className={styles.overlayImage}
            src={`./toy_items/${overlayImage}`}
            alt="overlay cat"
          />
          <div className={styles.view}>VIEW MORE</div>
        </Link>

        <img
          className={styles.itemImage}
          src={`./toy_items/${image}`}
          alt="cat item"
        />
      </div>
      <div className={styles.name}>{name}</div>

      <div className={styles.priceIconContainer}>
        <div className={styles.price}>${price}</div>
        <div className={styles.cartIconContainer}>
          <FontAwesomeIcon
            onClick={addItemToCartHandler}
            className={styles.cartIcon}
            icon={faCartPlus}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
