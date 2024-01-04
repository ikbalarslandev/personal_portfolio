import { useState } from "react";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const sclass = active
    ? "hamburger-active hide-visibility"
    : "hamburger-active";

  const kclass = active
    ? "hamburger-hover unhide-visibility"
    : "hamburger-hover ";

  const five = active ? "unhide-visibility" : "";
  return (
    <div className="hamburger" onClick={handleClick}>
      <span className={kclass}></span>
      <span className={sclass}></span>
      <span className={kclass}></span>
      <span className={sclass}></span>
      <span className={five}></span>
      <span className={sclass}></span>
      <span className={kclass}></span>
      <span className={sclass}></span>
      <span className={kclass}></span>
    </div>
  );
};

export default Hamburger;
