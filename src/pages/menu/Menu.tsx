import Width from "../../components/width/Width";
import data from "../../data";
import { useSelector } from "react-redux";

const Menu = () => {
  const language = useSelector((state: any) => state.language.language);
  const content = data[language as keyof typeof data].menu_items;
  return (
    <ul className="nav__menu">
      {content.map((item: string, index: number) => (
        <li key={index}>
          <Width text={item} number={index + 1} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
