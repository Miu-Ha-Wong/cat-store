import { useDispatch, useSelector } from "react-redux";
import styles from "./CheckOut.module.css";
import { cartActions } from "../../../store/cart-slice";
import { uiActions } from "../../../store/ui-slice";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const dispatch = useDispatch();

  const checkOutHandler = () => {
    dispatch(uiActions.formToggle());
  };

  return (
    <div className={styles.btnContainer}>
      <button onClick={checkOutHandler} className={styles.checkOutBtn}>
        Check Out
      </button>
    </div>
  );
};

export default CheckOut;
