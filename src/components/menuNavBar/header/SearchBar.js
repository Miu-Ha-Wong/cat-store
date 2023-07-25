import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/SearchBar.module.css";
import ProductData from "../../../data/ProductData";
import { cartActions } from "../../../store/cart-slice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = ({ setShow }) => {
  const [found, setFound] = useState("");

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const inputHandler = (event) => {
    const inputText = event.target.value;
    setFound(inputText);
  };

  const dispatchFoundProduct = () => {
    if (found.trim().length !== 0) {
      const foundProduct = ProductData().TOY_ITEMS.filter((item) =>
        item.name.toLowerCase().includes(found.toLowerCase())
      );
      dispatch(cartActions.search(foundProduct));
    }
    setFound("");
  };

  const enterHandler = (event) => {
    if (found.trim().length !== 0 && event.key === "Enter") {
      navigate("/search");
      dispatchFoundProduct();
      setShow(false);
    }
  };

  const findHandler = () => {
    dispatchFoundProduct();
    setShow(false);
  };

  const searchIcon = (
    <FontAwesomeIcon
      onClick={findHandler}
      className={styles.searchIcon}
      icon={faMagnifyingGlass}
    />
  );

  const searchLink = <Link to="/search">{searchIcon}</Link>;
  const searchProduct = found.trim().length === 0 ? searchIcon : searchLink;

  const closeHandler = () => {
    setShow(false);
  };

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.searchBar}>
        {searchProduct}

        <input
          onChange={inputHandler}
          onKeyDown={enterHandler}
          type="text"
          placeholder="Search"
          className={styles.searchBarInput}
          value={found}
        />
        <div onClick={closeHandler} className={styles.closeBtn}>
          X
        </div>
      </div>
    </>
  );
};

export default SearchBar;
