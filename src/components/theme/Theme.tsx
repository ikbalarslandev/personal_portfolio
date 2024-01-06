import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Theme = () => {
  let defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState(defaultTheme);

  const handleOnClick = () => {
    const body = document.querySelector("body");

    if (theme === "light") {
      body?.classList.remove("overrideLight");
      body?.classList.add("overrideDark");
    } else {
      body?.classList.remove("overrideDark");

      body?.classList.add("overrideLight");
    }
    setTheme(theme === "light" ? "dark" : "light");
  };

  const sun = <FontAwesomeIcon icon={faSun} className="theme__icon" />;
  const moon = <FontAwesomeIcon icon={faMoon} className="theme__icon" />;

  return theme === "light" ? (
    <button className="theme" onClick={handleOnClick}>
      {sun}
    </button>
  ) : (
    <button className="theme" onClick={handleOnClick}>
      {moon}
    </button>
  );
};

export default Theme;
