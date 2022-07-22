import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./ErrorMsg.module.css";

class ErrorMsg extends Component {
  render() {
    const { message } = this.props;

    return <p className={s.error}>{message || "Something went wrong ..."}</p>;
  }
}

ErrorMsg.propTypes = {
  message: PropTypes.string,
};

export default ErrorMsg;
