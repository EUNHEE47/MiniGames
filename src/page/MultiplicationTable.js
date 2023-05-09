import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MultiplicationTable = () => {
  const [randomNum1, setRandomNum1] = useState(Math.ceil(Math.random() * 9));
  const [randomNum2, setRandomNum2] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const answerForm = (e) => {
    e.preventDefault();

    if (parseInt(value) === randomNum1 * randomNum2) {
      setResult("딩동댕");
      setRandomNum1(Math.ceil(Math.random() * 9));
      setRandomNum2(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
  };

  return (
    <Container>
      <div className="game-title">
        <h1>구구단</h1>
      </div>
      <div>
        {randomNum1} * {randomNum2} =
      </div>
      <form onSubmit={answerForm}>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </Container>
  );
};

export default MultiplicationTable;
