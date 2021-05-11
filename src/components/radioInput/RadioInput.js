import React from "react";
import "./RadioInput.scss";

function RadioInput({ label, value, checked, setter }) {
  return (
    <label className="radioInput">
      <input
        type="radio"
        checked={checked === value}
        onChange={() => setter(value)}
      />
      <span>{label}</span>
    </label>
  );
}

export default RadioInput;
