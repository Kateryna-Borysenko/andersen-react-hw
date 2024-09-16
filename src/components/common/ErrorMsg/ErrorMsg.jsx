import s from "./ErrorMsg.module.css";

const ErrorMessage = ({ error }) => {
  if (error === "") {
    return null;
  }

  return <div className={s.errorMsg}>{error}</div>;
};

export default ErrorMessage;
