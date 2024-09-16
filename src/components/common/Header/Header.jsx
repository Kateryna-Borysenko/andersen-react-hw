import s from "./Header.module.css";

const Header = ({ text }) => {
  return <h1 className={s.header}>{text}</h1>;
};

export default Header;
