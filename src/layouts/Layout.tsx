import { Outlet } from "react-router-dom";
import "../styles/main.scss";

import Nav from "../widgets/Nav";
import Menu from "../pages/menu/Menu";

const Layout = () => {
  return (
    <>
      <Nav />
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
