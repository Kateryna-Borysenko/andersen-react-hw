import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    const { text, icon, onClick } = this.props;

    return (
      <button className={s.button} onClick={onClick}>
        {icon && <img src={icon} alt={text} />}
        <span>{text}</span>
      </button>
    );
  }
}

Button.defaultProps = {
  icon: null,
  onClick: () => {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Button;
