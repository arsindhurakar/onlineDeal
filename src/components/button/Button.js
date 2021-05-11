import React from "react";
import "./Button.scss";

function Button({ children, secondary, onClick, disabled, disabledDefault }) {
  return (
    <button
      onClick={onClick}
      className={!secondary ? "button" : "button button--secondary"}
      disabled={disabled || disabledDefault}
    >
      {!disabled ? children : "Processing.." || (disabledDefault && children)}
    </button>
  );
}

export default Button;
