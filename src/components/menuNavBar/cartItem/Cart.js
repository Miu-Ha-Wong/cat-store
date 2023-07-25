import styles from "./Cart.module.css";
import { Fragment } from "react";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CheckOut from "./CheckOut";
import SubmitCheckout from "./SubmitCheckout";

const Cart = () => {
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const showMenu = useSelector((state) => state.ui.formVisible);
  const items = useSelector((state) => state.cart.items);

  const emptyCart = (
    <div className={styles.emptyCart}>
      <FontAwesomeIcon className={styles.emptyCartIcon} icon={faCartShopping} />
      <div className={styles.emptyCartContent}>Your Shopping Cart is Empty</div>
    </div>
  );

  const cartItem = items.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        quantity={item.quantity}
        name={item.name}
        totalPrice={item.totalPrice}
        image={item.image}
        price={item.price}
      />
    );
  });

  const totalAmount = items.length === 0 ? emptyCart : <TotalAmount />;
  const checkOut = items.length !== 0 && <CheckOut />;
  return (
    <Fragment>
      <div onClick={closeCartHandler} className={styles.overlay}></div>
      <nav className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Shopping Cart</div>
          <div onClick={closeCartHandler} className={styles.close}>
            x
          </div>
        </div>
        <div>{cartItem}</div>
        <div>{totalAmount}</div>
        <div>{checkOut}</div>
        {showMenu && <SubmitCheckout />}
      </nav>
    </Fragment>
  );
};

export default Cart;
