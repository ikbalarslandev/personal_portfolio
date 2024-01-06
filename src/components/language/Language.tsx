import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguage } from "../../redux/slices/languageSlice";

const Language = () => {
  const [language, setLanguage] = useState("en");
  const languageRedux = useSelector((state: any) => state.language.language);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLanguage(language));
  }, [language]);

  const handleClick = () => {
    language === "en" ? setLanguage("tr") : setLanguage("en");
  };

  return <button onClick={handleClick}>{languageRedux.toUpperCase()}</button>;
};

export default Language;
