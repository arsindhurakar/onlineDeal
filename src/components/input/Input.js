import React from "react";
import "./Input.scss";

function Input({
  value,
  onChange,
  label,
  nextLabel,
  type,
  required,
  autoFocus,
  placeholder,
  secondary,
  isMessage,
}) {
  return (
    <div className="input">
      <div className="input__labels">
        <label>{label}</label>
        {nextLabel && <label className="input__nextLabel">{nextLabel}</label>}
      </div>
      {!isMessage ? (
        <input
          value={value}
          onChange={onChange}
          type={type}
          required={required}
          autoFocus={autoFocus}
          placeholder={placeholder}
          className={
            secondary ? "input__primary input__secondary" : "input__primary"
          }
        />
      ) : (
        <textarea
          className="input__primary input__secondary input__secondary--isMessage"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      )}
    </div>
  );
}

export default Input;
