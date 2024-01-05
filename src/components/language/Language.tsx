import { useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState("EN");

  const handleClick = () => {
    language === "EN" ? setLanguage("TR") : setLanguage("EN");
  };

  return <button onClick={handleClick}>{language}</button>;
};

export default Language;
