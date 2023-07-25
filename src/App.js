import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./components/productDetail/ProductDetail";
import ApparelPage from "./pages/Apparel";
import ToysPage from "./pages/Toys";
import FountainsPage from "./pages/Fountains";
import CatTreesPage from "./pages/CatTrees";
import SearchPage from "./pages/Search";
import ErrorPage from "./components/UI/Error";
import OderConfirm from "./components/UI/OrderConfirm";
import SimpleInput from "./components/menuNavBar/header/Account";
import Account from "./components/menuNavBar/header/Account";
import AccountPage from "./pages/Account";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "product/:productId", element: <ProductDetail /> },
        {
          path: "apparel",
          element: <ApparelPage />,
          children: [{ path: ":productId", element: <ProductDetail /> }],
        },
        { path: "fountains", element: <FountainsPage /> },
        { path: "toys", element: <ToysPage /> },
        { path: "catTrees", element: <CatTreesPage /> },
        { path: "search", element: <SearchPage /> },
        { path: "confirmation", element: <OderConfirm /> },
        { path: "account", element: <AccountPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
