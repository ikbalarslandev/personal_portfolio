import { useState, useEffect } from "react";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const menu = document.querySelector(".nav__menu");
  const home = document.querySelector(".home");

  useEffect(() => {
    if (active) {
      menu?.classList.add("show-menu");
      home?.classList.add("hide");
    } else {
      menu?.classList.remove("show-menu");
      home?.classList.remove("hide");
    }
  }, [active]);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button className="hamburger" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
