import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Input.module.css";

class Input extends Component {
  render() {
    const { label, type, name, placeholder } = this.props;

    return (
      <>
        <label className={s.label}>
          {label}
          <input
            value={name.value}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e) => this.props.onChange(e)}
            className={s.input}
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
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
