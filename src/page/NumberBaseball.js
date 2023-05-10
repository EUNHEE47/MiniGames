/* eslint-disable no-unused-expressions */
import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineQuestion } from "react-icons/ai";

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    // candidate의 숫자가 아닌 index의 번호를 뽑아와야 하므로 * 9+1이 아닌 *9.
    // = random한 index번호를 뽑음
    // splice > 기존 배열에서 -1 되므로, random 숫자도 -i씩 해줌.
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState("숫자 4개를 입력해 주세요!");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  console.log("answer?", answer);
  console.log("tries ? ", tries);

  const userPlay = (e) => {
    e.preventDefault();

    if (value.length !== 4) {
      setValue("");
      return alert("숫자 4개를 입력해 주세요");
    }

    if (new Set(value).size !== 4) {
      return alert("숫자가 중복되지 않도록 입력해 주세요");
    }

    for (let i = 0; i < tries.length; i++) {
      if (tries[i].try === value) {
        setValue("");
        return alert("이미 입력한 숫자입니다.");
      }
    }

    if (value === answer.join("")) {
      setResult("👏홈런👏");
      setGameOver(true);
    } else {
      const answerArray = value.split("").map((item) => parseInt(item));

      let strike = 0;
      let ball = 0;

      if (tries.length >= 9) {
        ////////////////////////////////////
        setResult(`아웃🙅‍♂️ 정답은 ? ${answer.join(" ")}`);
        setGameOver(true);
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevState) => [
          ...prevState,
          { try: value, result: `${strike}스트라이크 ${ball}볼` },
        ]);
        setValue("");
      }
    }
  };

  const replay = () => {
    setValue("");
    setAnswer(getNumbers());
    setTries([]);
    setResult("숫자 4개를 입력해 주세요!");
    setGameOver(false);
  };
  return (
    <Container className="baseball">
      <div className="game-title">
        <h1>⚾숫자 야구 게임⚾</h1>
      </div>
      <Row>
        <Col lg={6} md={6} sm={12} className="rule">
          <div>
            <h3>게임 방법</h3>
          </div>
          <h5 className="rule-content">
            숫자 1~9 중 4개의 숫자를 입력한다. <br />
            숫자 + 자릿수가 같으면 스트라이크(strike), 숫자만 같으면 볼(ball)
            <br />
            (예) 답 : 3142 <br /> 내가 입력한 값 : 1234 <br />
            [0 스트라이크, 4 볼]
            <br />
            4개의 숫자가 모두 틀리면 🙅🏻‍♂️ 아웃(out) 🙅🏻‍♂️
            <br /> 4개의 숫자가 모두 맞으면 ⚾️ 홈런(Home run) ⚾️ <br />
            기회는 총 10번!
          </h5>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className="baseball-result">
            <h3>{result}</h3>
          </div>
          <form onSubmit={userPlay} className="baseball-form">
            <input
              type="number"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              maxLength={4}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {gameOver ? (
              <button
                type="submit"
                disabled={true}
                className="baseball-btn-true"
              >
                Go
              </button>
            ) : (
              <button type="submit" disabled={false}>
                Go
              </button>
            )}
          </form>

          <div className="baseball-try">
            <ul>
              {tries.map((item, index) => (
                <li key={index}>
                  {`${index + 1}번째 시도 : [ ${item.try} ] ${item.result}`}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="baseball-replay-btn" onClick={replay}>
              Replay
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NumberBaseball;
