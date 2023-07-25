import styles from "../UI/OderConfirm.module.css";
import happyCat from "../../assets/happyCat.png";
import { Link } from "react-router-dom";

const OrderConfirm = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={happyCat} className={styles.catImg} />
        </div>
        <div className={styles.popup}>
          <h2>Your Order is complete!</h2>
          <p>You will be receiving a confirmation email with order details.</p>
        </div>
        <Link className={styles.btnContainer} to="/">
          <button className={styles.ShoppingBtn}>Continue Shopping</button>
        </Link>
      </div>
    </>
  );
};

export default OrderConfirm;
