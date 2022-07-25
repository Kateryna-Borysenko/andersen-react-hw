import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./TextArea.module.css";

class TextArea extends Component {
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
      rows,
      label,
      name,
      value,
      placeholder,
      maxLength,
      onChange,
      onBlur,
      required,
      pattern,
      errorMessage,
    } = this.props;

    return (
      <label className={s.label}>
        {label}
        <textarea
          value={value}
          name={name}
          className={s.textArea}
          rows={rows}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          focused={this.state.focused.toString()}
          onFocus={this.handleFocus}
          pattern={pattern}
          required={required}
        ></textarea>
        <span>{errorMessage}</span>

        <div className={s.message}>
          Осталось символов {maxLength - value.length} / {maxLength}
        </div>
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default TextArea;
