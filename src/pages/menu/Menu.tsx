import Width from "../../components/width/Width";

const Menu = () => {
  return (
    <ul className="nav__menu">
      <li>
        <Width text="HOME" number={1} />
      </li>
      <li>
        <Width text="WORK" number={2} />
      </li>
      <li>
        <Width text="ABOUT" number={3} />
      </li>
      <li>
        <Width text="CONTACT" number={4} />
      </li>
    </ul>
  );
};

export default Menu;
