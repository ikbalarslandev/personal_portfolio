import { Outlet } from "react-router-dom";
import Nav from "../widgets/Nav";
import "../styles/main.scss";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
