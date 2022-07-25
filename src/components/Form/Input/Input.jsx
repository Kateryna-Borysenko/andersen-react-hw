import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Input.module.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  handleFocus = (e) => {
    this.setState({ focused: true });
  };

  render() {
    const {
      label,
      type,
      name,
      value,
      placeholder,
      onChange,
      errorMessage,
      pattern,
      onBlur,
      required,
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
            focused={this.state.focused.toString()}
            onBlur={onBlur}
            onFocus={this.handleFocus}
            pattern={pattern}
            required={required}
          />
          <span>{errorMessage}</span>
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
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
};

export default Input;
