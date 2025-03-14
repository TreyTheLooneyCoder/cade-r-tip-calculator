import React from "react";
import "../App.css"

const PercentButton = (props) => {
  return (
    <>
      <button type="button" className="px-6 py-2 bg-veryDarkGrayishCyan text-2xl rounded-md text-white hover:cursor-pointer hover:bg-green-400 hover:text-cyan-800" onClick={props.onClick}>{props.num}%</button>
    </>
  );
};

export default PercentButton;