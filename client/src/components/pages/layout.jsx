import { Outlet } from "react-router-dom";
import SiteFooter from "../layouts/site-footer";
import SiteHeader from "../layouts/site-header";

export default function Layout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
