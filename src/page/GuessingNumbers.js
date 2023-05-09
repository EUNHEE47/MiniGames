import React, { useState } from "react";

const GuessingNumbers = () => {
  const [status, setStatus] = useState("1~100사이의 숫자를 입력해 주세요.");
  const [value, setValue] = useState("");
  const [chances, setChances] = useState(10);
  const [history, setHistory] = useState([]);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  console.log("randomNum ? ", randomNum);
  console.log("value?", value);

  const userPlay = (e) => {
    e.preventDefault();
    if (value < 0 || value > 100 || value === "") {
      setStatus("1~100사이의 숫자를 입력해 주세요");
      setValue("");
      return;
    }

    setChances(chances - 1);

    if (value < randomNum) {
      setStatus("Up!");
      setValue("");
    } else if (value > randomNum) {
      setStatus("Down!");
      setValue("");
    } else {
      setStatus("정답입니다!");
      setValue("");
    }
  };

  return (
    <div>
      <div>Up & Down</div>
      <div>
        <div>{status}</div>
        <form onSubmit={userPlay}>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
        <div>{`남은 기회 : ${chances}`}</div>
      </div>
    </div>
  );
};

export default GuessingNumbers;
