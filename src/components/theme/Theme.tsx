import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleOnClick = () => {
    toggleTheme();
  };

  const sun = <FontAwesomeIcon icon={faSun} className="theme__icon" />;
  const moon = <FontAwesomeIcon icon={faMoon} className="theme__icon" />;

  return (
    <div>
      {theme === "light" ? (
        <button className="theme" onClick={handleOnClick}>
          {sun}
        </button>
      ) : (
        <button className="theme" onClick={handleOnClick}>
          {moon}
        </button>
      )}
    </div>
  );
};

export default Theme;
