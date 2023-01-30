import React from "react";
import "../assests/Button.css";

interface Props {
  disabled: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ disabled, children }) => {
  return (
    <button
      className="primary"
      type="submit"
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};

export default Button;
