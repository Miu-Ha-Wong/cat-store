import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/UI/ScrollToTop";
import MenuNavBar from "../components/menuNavBar/MenuNavBar";

const RootLayout = () => {
  return (
    <>
      <MenuNavBar />
      <main>
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
