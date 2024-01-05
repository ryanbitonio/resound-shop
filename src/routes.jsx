import { createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Layout from "./components/pages/layout";
import ProductItem from "./components/pages/product-item";

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
  { path: "/login", element: <Login /> },
]);

export default router;
