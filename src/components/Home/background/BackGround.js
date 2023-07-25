import React, { Fragment } from "react";
import header_cat from "../../../assets/header_cat.jpg";
import styles from "./BackGround.module.css";
import BackGroundDescription from "./BackGroundDescription";

const BackGround = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles["main-image"]}>
          <img src={header_cat} alt="A Cat with a cat toy!" />
          <BackGroundDescription />
        </div>
      </div>
    </Fragment>
  );
};

export default BackGround;
