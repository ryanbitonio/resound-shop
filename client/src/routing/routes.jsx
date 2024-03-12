import { createBrowserRouter } from "react-router-dom";
import Signin from "../components/pages/signin";
import Home from "../components/pages/home";
import Products from "../components/pages/products";
import Layout from "../components/pages/layout";
import ProductItem from "../components/pages/product-item";
import Signup from "../components/pages/signup";
import PrivateRoutes from "./private-routes";
import VerifyEmail from "@/components/pages/verify-email";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        element: <Layout />,
        children: [{ index: true, element: <Home /> }],
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductItem /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/signup/verify-email", element: <VerifyEmail /> },
  { path: "/signin", element: <Signin /> },
]);

export default router;
