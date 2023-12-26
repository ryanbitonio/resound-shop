import { createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/login";
import Home from "./components/pages/home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
]);

export default router;
