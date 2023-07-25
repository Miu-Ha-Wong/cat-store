import { Outlet } from "react-router-dom";
import ItemsNavBar from "../components/menuNavBar/ItemsNavBar";
import Cart from "../components/menuNavBar/cartItem/Cart";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showMenu = useSelector((state) => state.ui.menuIsVisible);
  return (
    <>
      {showMenu && <ItemsNavBar />}
      {showCart && <Cart />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
