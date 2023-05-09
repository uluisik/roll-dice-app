import React from "react";
import "./Dice.css";
const Dice = ({ face, rolling }) => {
  return <i className={`dice fas fa-dice-${face} ${rolling && "shaking"}`}></i>;
};

export default Dice;
