import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/HeaderButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { useEffect, useState } from "react";

import SearchButton from "./SearchButton";
import { Link } from "react-router-dom";

const HeaderButton = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${styles.cartAmount} ${
    btnIsHighlighted ? styles.bump : ""
  }`;

  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const showMenuHandler = () => {
    dispatch(uiActions.menuToggle());
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className={styles.right}>
      <div>
        <SearchButton />
      </div>
      <div onClick={showCartHandler} className={styles.icon}>
        <div className={styles.cart}>
          <FontAwesomeIcon icon={faCartShopping} />

          {items.length === 0 ? null : (
            <div className={btnClasses}>{totalQuantity}</div>
          )}
        </div>
      </div>
      <div className={styles.icon}>
        <Link to="/account">
          {" "}
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
      <div onClick={showMenuHandler} className={styles.menuIcon}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default HeaderButton;
