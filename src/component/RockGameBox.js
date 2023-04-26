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
    <div>
      <p>{props.title}</p>
      <p>{props.item && props.item.name}</p>
      <img className="img" src={props.item && props.item.img} />
      <p>{result}</p>
    </div>
  );
};

export default RockGameBox;
