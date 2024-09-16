import s from "./Button.module.css";

const Button = ({ text, disabled, onClick }) => {
  return (
    <button
      className={disabled ? s.disabled : s.button}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
