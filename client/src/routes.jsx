import { createBrowserRouter } from "react-router-dom";
import Signin from "./components/pages/signin";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Layout from "./components/pages/layout";
import ProductItem from "./components/pages/product-item";
import Signup from "./components/pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductItem /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
]);

export default router;
