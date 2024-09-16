import s from "./Input.module.css";

const Input = (props) => {
  const type = props.type || "text";

  const handleChange = (e) => {
    props.onChange(props.name, e);
  };

  const { label, name, value, placeholder, pattern } = props;

  return (
    <>
      <label className={s.label}>
        {label}
        <input
          className={s.input}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          pattern={pattern}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Input;
