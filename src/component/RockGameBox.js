/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const RockGameBox = (props) => {
  let result;

  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  return (
    <div className={`show-play ${result}`}>
      <h2>{props.title}</h2>
      <img src={props.item && props.item.img} />
      <h3>{result}</h3>
    </div>
  );
};

export default RockGameBox;
