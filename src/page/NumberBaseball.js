/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

// 사용 state : result, value, tries, answer
// 겹치지 않게 숫자 0~9 중에 4개를 뽑는다 (= answer)
// 만약 4개의 숫자를 모두 맞췄으면 화면에 ‘홈런!’을, 알림창에 ‘게임을 다시 시작합니다’를 출력해주고 게임을 새로 시작한다.
// 답과 내가 입력한 숫자가 위치까지 같으면 '스트라이크', 답이 내가 입력한 숫자를 포함하고는 있지만 서로 위치가 다르면 '볼'이다.
// 만약 10번 답을 틀렸으면, ‘답은 ~ 였습니다’라고 화면에 띄워주고 알림창에 ‘게임을 다시 시작합니다’를 출력해주고 게임을 새로 시작한다.
// 10번 보다 적게 답을 틀렸을 때는 화면에 ‘ㅇ스트라이크 ㅇ볼입니다’를 출력해준다.

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
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const [inputNum, setInputNum] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);

  console.log("answer?", answer);

  console.log(buttonActive);

  const userPlay = (e) => {
    e.preventDefault();

    if (value.length !== 4) {
      return alert("숫자 4개를 입력해 주세요");
    }

    setInputNum((prev) => [...prev, value]);
    console.log("inputNum?", inputNum);

    if (value === answer.join("")) {
      setResult("홈런");
      setTries((prevTries) => {
        [...prevTries, { try: value, result: "홈런" }];
      });

      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      setButtonActive(true);
    } else {
      const answerArray = value.split("").map((item) => parseInt(item));
      let strike = 0;
      let ball = 0;

      if (tries.length >= 9) {
        setResult(`10번 기회 사용! 답은 ${answer.join(",")}였습니다.`);
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
          { try: value, result: `${strike} 스트라이크, ${ball}볼` },
        ]);
        setValue("");
      }
    }
  };

  const replay = () => {
    setValue("");
    setAnswer(getNumbers());
    setTries([]);
    setResult("");
    setInputNum([]);
    setButtonActive(false);
  };

  return (
    <div>
      <div>{result}</div>
      <form onSubmit={userPlay}>
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
        {buttonActive ? (
          <button type="submit" disabled={true}>
            Go
          </button>
        ) : (
          <button type="submit" disabled={false}>
            Go
          </button>
        )}
      </form>
      <div>내가 입력한 숫자 : {`${inputNum}`}</div>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((item, index) => (
          <li key={index}>{`${index + 1}번째 시도 : ${item.result} `}</li>
        ))}
      </ul>
      <button onClick={replay}>다시하기</button>
    </div>
  );
};

export default NumberBaseball;
