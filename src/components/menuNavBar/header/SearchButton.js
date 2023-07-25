import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/HeaderButton.module.css";
import ProductData from "../../../data/ProductData";
import { cartActions } from "../../../store/cart-slice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";

const SearchButton = () => {
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
    }
  };

  const findHandler = () => {
    dispatchFoundProduct();
  };

  const searchIcon = (
    <FontAwesomeIcon
      onClick={findHandler}
      className={styles.search}
      icon={faMagnifyingGlass}
    />
  );

  const searchLink = <Link to="/search">{searchIcon}</Link>;
  const searchProduct = found.trim().length === 0 ? searchIcon : searchLink;

  const [show, setShow] = useState(false);

  const showSearchBar = () => {
    setShow(true);
  };

  return (
    <>
      <div className={styles.icon}>
        <div>
          <FontAwesomeIcon
            className={styles.searchIcon}
            icon={faMagnifyingGlass}
            onClick={showSearchBar}
          />
        </div>

        <input
          onChange={inputHandler}
          onKeyDown={enterHandler}
          type="text"
          placeholder="Search"
          className={styles.input}
          value={found}
        />
        {searchProduct}
      </div>
      {show && <SearchBar setShow={setShow} />}
    </>
  );
};

export default SearchButton;
