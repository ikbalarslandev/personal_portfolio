import { useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState("EN");

  const handleClick = () => {
    language === "EN" ? setLanguage("TR") : setLanguage("EN");
  };

  return (
    <div>
      <button onClick={handleClick}>{language}</button>
    </div>
  );
};

export default Language;
