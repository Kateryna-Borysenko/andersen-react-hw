import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Input.module.css";

class Input extends Component {
  render() {
    const {
      label,
      type,
      name,
      value,
      placeholder,
      pattern,
      message,
      onChange,
      onBlur,
    } = this.props;

    return (
      <>
        <label className={s.label}>
          {label}
          <input
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={s.input}
            pattern={pattern}
            title={message}
            onBlur={onBlur}
            required
          />
        </label>
      </>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
