import React from "react";
import "./acceptbutton.css";

const AcceptButton = ({ tandc }) => {
  return (
    <button className="submit" onClick={() => tandc()}>Accept</button>
  );
};

export default AcceptButton;
