import Header from "../../components/menuNavBar/header/Header";
import ItemsNavBar from "../../components/menuNavBar/rwdItemNavBar/ItemsNavBar";
import Cart from "../../components/menuNavBar/cartItem/Cart";

import { useSelector } from "react-redux";

const MenuNavBar = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showMenu = useSelector((state) => state.ui.menuIsVisible);
  return (
    <>
      {showMenu && <ItemsNavBar />}
      {showCart && <Cart />}
      <Header />
    </>
  );
};

export default MenuNavBar;
