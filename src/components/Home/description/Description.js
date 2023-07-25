import { Fragment } from "react";
import styles from "./Description.module.css";
import description from "../../../assets/description.avif";

const Description = () => {
  return (
    <Fragment>
      <div className={styles.centerContainer}>
        <div className={styles.description}>
          <img src={description} alt="Welcome description" />
          <div className={styles.description_content}>
            <div className={styles.title}>Welcome to our Cat Toy Store!</div>
            <p>
              We are a dedicated online shop focused on cat play and enjoyment,
              committed to providing cat owners with high-quality cat toys and
              related products.
            </p>
            <a href="#shopNow" className={styles.shopNow}>
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <hr className={styles.hr}></hr>
    </Fragment>
  );
};

export default Description;
