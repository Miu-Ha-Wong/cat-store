import styles from "./ItemsNavBar.module.css";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { Link } from "react-router-dom";

const ItemsNavBar = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(uiActions.menuToggle());
  };

  return (
    <Fragment>
      <div onClick={closeHandler} className={styles.overlay}></div>
      <nav className={styles.container}>
        <div onClick={closeHandler} className={styles.close}>
          x
        </div>

        <div className={styles.titleContainer}>
          <Link to="/" className={styles.title} onClick={closeHandler}>
            Home
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <Link to="/catTrees" className={styles.title} onClick={closeHandler}>
            Cart Trees
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <Link to="/fountains" className={styles.title} onClick={closeHandler}>
            Fountains & Bowls
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <Link to="/apparel" className={styles.title} onClick={closeHandler}>
            Apparel
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <Link to="/toys" className={styles.title} onClick={closeHandler}>
            Toys
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default ItemsNavBar;
