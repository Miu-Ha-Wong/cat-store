import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const CartItem = (props) => {
  const { id, name, totalPrice, quantity, image, price } = props;

  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItem(id));
  };

  const addItemToCartHander = () => {
    dispatch(cartActions.addItemToCart({ id: id, price: price, quantity: 1 }));
  };

  return (
    <div className={styles.itemContainer}>
      <Link to={`/product/${id}`}>
        <img
          className={styles.itemImg}
          src={`../toy_items/${image}`}
          alt="A Cat with a cat toy!"
        />
      </Link>

      <div className={styles.itemDescription}>
        <Link to={`/product/${id}`} className={styles.itemName}>
          {name}
        </Link>
        <div className={styles.priceContainer}>
          <div className={styles.itemPrice}>$ {totalPrice}</div>
          <div className={styles.itemQuantity}>x {quantity}</div>
        </div>

        <button onClick={removeHandler} className={styles.deleteBtn}>
          -
        </button>
        <button className={styles.numBtn}>1</button>
        <button onClick={addItemToCartHander} className={styles.addBtn}>
          +
        </button>

        <div className={styles.deleteContainer}>
          <FontAwesomeIcon
            className={styles.delete}
            onClick={deleteItemHandler}
            icon={faTrashCan}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
