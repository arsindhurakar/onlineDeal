import React from "react";
import "./Logo.scss";
import { useHistory } from "react-router-dom";

function Logo({ disabled }) {
  const history = useHistory();

  return (
    <div
      className={!disabled ? "logo" : "logo logo--disabled"}
      onClick={!disabled ? () => history.push("/") : undefined}
    >
      <p>
        OnlineDeal | <span>Be genuine</span>
      </p>
    </div>
  );
}

export default Logo;
