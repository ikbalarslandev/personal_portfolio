import Hamburger from "../components/hamburger/Hamburger";
import Theme from "../components/theme/Theme";
import Language from "../components/language/Language";

const Nav = () => {
  return (
    <nav className="nav">
      <button className="nav__logo">IA</button>
      <div className="nav__items">
        <Language />
        <Theme />
        <Hamburger />
      </div>
    </nav>
  );
};

export default Nav;
