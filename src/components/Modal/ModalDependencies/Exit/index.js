import React from "react";
import Close from "./times-solid.svg";
import "./exit.css";

const exit = ({ close }) => {
  return (
    <button className="close" onClick={() => close()}>
      <img src={Close} alt="close" />
    </button>
  );
};

export default exit;
