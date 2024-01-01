import { createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import Products from "./components/pages/products";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/products", element: <Products /> },
]);

export default router;
