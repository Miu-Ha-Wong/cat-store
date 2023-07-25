import Footer from "../footer/Footer";
import MenuNavBar from "../menuNavBar/MenuNavBar";
import styles from "../UI/Error.module.css";
import errorCat from "../../assets/errorCat.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <MenuNavBar />
      <div className={styles.errorContainer}>
        <div>
          <div className={styles.imgContainer}>
            <div className={styles.title}>SORRY</div>
            <img className={styles.catImg} src={errorCat} />
          </div>
          <div className={styles.content}>We couldn't find that page</div>
        </div>
        <Link className={styles.btnContainer} to="/">
          <button className={styles.shopBtn}>Continue Shopping</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
