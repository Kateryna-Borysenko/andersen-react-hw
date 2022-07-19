import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./TextArea.module.css";
// import ErrorMsg from "../ErrorMsg/ErrorMsg";

class TextArea extends Component {
  render() {
    const { rows, label, name, placeholder } = this.props;

    return (
      <label className={s.label}>
        {label}
        <textarea
          value={name.value}
          name={name}
          className={s.textArea}
          rows={rows}
          placeholder={placeholder}
          onChange={(e) => this.props.onChange(e)}
          required
        ></textarea>
        {/* <ErrorMsg /> */}
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
};

export default TextArea;
