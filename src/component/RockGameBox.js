/* eslint-disable jsx-a11y/alt-text */
const RockGameBox = (props) => {
  let result;

  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    // eslint-disable-next-line no-unused-vars
    result = props.result;
  }

  return (
    <div className={`show-play ${result}`}>
      <h2>{props.title}</h2>
      <img className="img" src={props.item && props.item.img} />
      <h3>{result}</h3>
    </div>
  );
};

export default RockGameBox;
