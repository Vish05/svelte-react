import React from "react";
import "../assests/Card.css";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
