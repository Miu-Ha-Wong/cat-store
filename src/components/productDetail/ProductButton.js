import styles from "./ProductButton.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductButton = (props) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const { id, name, price, image } = props;

  const dispatch = useDispatch();
  const removeHandler = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const addHander = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
        quantity: itemQuantity,
      })
    );
    setItemQuantity(1);
  };

  return (
    <div className={styles.btnContainer}>
      <div className={styles.addRemoveContainer}>
        <button onClick={addHander} className={styles.addBtn}>
          +
        </button>
        <button className={styles.numBtn}>{itemQuantity}</button>
        <button onClick={removeHandler} className={styles.removeBtn}>
          -
        </button>
      </div>
      <div>
        <button onClick={addItemToCartHandler} className={styles.addToCartBtn}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductButton;
