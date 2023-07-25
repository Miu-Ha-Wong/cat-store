import OrderConfirm from "../UI/OrderConfirm";
import BackGround from "./background/BackGround";
import Description from "./description/Description";
import Feature from "./features/Feature";
import Products from "./products/Products";

const Home = () => {
  return (
    <>
      <BackGround />
      <Feature />
      <Description />
      <Products />
    </>
  );
};
export default Home;
