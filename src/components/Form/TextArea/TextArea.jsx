import s from "./TextArea.module.css";

const TextArea = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e);
  };

  const { rows, label, name, value, placeholder, maxLength } = props;

  return (
    <label className={s.label}>
      {label}
      <textarea
        className={s.textArea}
        value={value}
        name={name}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChange}
      ></textarea>

      <div className={s.message}>
        Осталось символов {maxLength - value.length} / {maxLength}
      </div>
    </label>
  );
};

export default TextArea;
