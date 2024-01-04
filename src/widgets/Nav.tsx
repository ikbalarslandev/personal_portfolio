import Hamburger from "../components/hamburger/Hamburger";
import Theme from "../components/theme/Theme";
import Language from "../components/language/Language";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">IA</div>
      <div className="nav__items">
        <div className="nav__items-toggle">
          <Language />
          <Theme />
        </div>

        <Hamburger />
      </div>
    </div>
  );
};

export default Nav;
