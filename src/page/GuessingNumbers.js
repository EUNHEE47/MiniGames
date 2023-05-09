import React, { useState } from "react";
import { Container } from "react-bootstrap";

const GuessingNumbers = () => {
  const [status, setStatus] = useState("1~100사이의 숫자를 맞춰보세요😊");
  const [value, setValue] = useState("");
  const [chances, setChances] = useState(10);
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  // console.log("randomNum ? ", randomNum);

  const userPlay = (e) => {
    e.preventDefault();
    if (value < 0 || value > 100 || value === "") {
      setStatus("1~100사이의 숫자를 입력해 주세요");
      setValue("");
      return;
    }

    if (history.includes(value)) {
      setStatus("이미 입력한 숫자 입니다.");
      setValue("");
      return;
    }

    setChances(chances - 1);
    setHistory((history) => [...history, value]);

    if (value < randomNum) {
      setStatus("UP");
      setValue("");
    } else if (value > randomNum) {
      setStatus("DOWN!!");
      setValue("");
    } else {
      setStatus("정답입니다!");
      setGameOver(true);
    }

    if (chances <= 1) {
      setGameOver(true);
    }
  };

  const replay = () => {
    setRandomNum(Math.floor(Math.random() * 100) + 1);
    setGameOver(false);
    setChances(10);
    setStatus("1~100사이의 숫자를 맞춰보세요😊");
    setHistory([]);
    setValue("");
  };

  return (
    <Container>
      <div className="game-title">
        <h1>Up & Down</h1>
      </div>
      <div className="num-game-play-box">
        <div>
          <h3>{status}</h3>
        </div>
        <form className="numGame-form" onSubmit={userPlay}>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {gameOver ? (
            <button disabled={true} type="submit" className="btn-true">
              Go
            </button>
          ) : (
            <button disabled={false} type="submit">
              Go
            </button>
          )}
        </form>
        {chances < 4 ? (
          <div className="chances-text">
            <h5>{`남은 기회 : ${chances}`}</h5>
          </div>
        ) : (
          <div>
            <h5>{`남은 기회 : ${chances}`}</h5>
          </div>
        )}
      </div>
      <div className="num-replay-btn">
        <button onClick={replay}>Re Play</button>
      </div>
    </Container>
  );
};

export default GuessingNumbers;
