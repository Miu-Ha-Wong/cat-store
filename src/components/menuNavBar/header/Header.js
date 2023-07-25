import React, { Fragment } from "react";
import styles from "./styles/Header.module.css";
import HeaderButton from "./HeaderButton";
import HeaderTitle from "./HeaderTitle";
import shopLogo from "../../../assets/shopLogo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.container}>
        <Link to="/">
          <img className={styles.shopName} src={shopLogo} alt="Shop logo!" />
        </Link>
        <HeaderTitle />
        <HeaderButton />
      </header>
    </Fragment>
  );
};

export default Header;
