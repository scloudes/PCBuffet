import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, cls, type, clickHandler }) => {
  return (
    <button className={`btn ${cls}`} type={type} onClick={clickHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
