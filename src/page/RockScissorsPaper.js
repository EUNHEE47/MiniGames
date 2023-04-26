import React, { useState } from "react";
import { Container } from "react-bootstrap";
import RockGameBox from "../component/RockGameBox";

const choice = {
  rock: {
    name: "바위",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  scissors: {
    name: "가위",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  paper: {
    name: "보",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};

const RockScissorsPaper = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [gameCount, setGameCount] = useState(10);
  const [playBtn, setPlayBtn] = useState(false);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomNum();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));

    if (gameCount > 0) {
      setGameCount(gameCount - 1);
    } else {
      alert("Game Over");
      setPlayBtn(true);
    }
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "가위") {
      return computer.name === "보" ? "win" : "lose";
    } else if (user.name === "바위") {
      return computer.name === "가위" ? "win" : "lose";
    } else if (user.name === "보") {
      return computer.name === "바위" ? "win" : "lose";
    }
  };

  const randomNum = () => {
    // choice 를 배열화
    // 객체의 key값만 뽑아서 배열로 만들어주는 함수
    let itemArray = Object.keys(choice);

    let randomItem = Math.floor(Math.random() * itemArray.length);

    let final = itemArray[randomItem];

    return choice[final];
  };

  return (
    <Container className="rock-wrap">
      <div className="rock-title">
        <h1>가위✌ 바위👊 보🖐</h1>
      </div>

      <div className="rock-box">
        <RockGameBox title="You" item={userSelect} result={result} />
        <RockGameBox title="Computer" item={computerSelect} result={result} />
      </div>
      <div>{gameCount}</div>
      <div className="play-btn">
        <button onClick={() => play("scissors")} disabled={playBtn}>
          가위
        </button>
        <button onClick={() => play("rock")} disabled={playBtn}>
          바위
        </button>
        <button onClick={() => play("paper")} disabled={playBtn}>
          보
        </button>
      </div>
      <div>
        <a href="rock">다시시작</a>
      </div>
    </Container>
  );
};

export default RockScissorsPaper;
