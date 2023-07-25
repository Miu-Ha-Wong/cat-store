import { useSelector } from "react-redux";
import styles from "./TotalAmount.module.css";

const TotalAmount = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className={styles.totalContainer}>
      <div>Total Amount</div>
      <div>$ {totalAmount}</div>
    </div>
  );
};

export default TotalAmount;
