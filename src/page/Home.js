/* eslint-disable array-callback-return */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const games = [
    {
      name: "가위 바위 보",
      path: "rockScissorsPaper",
    },
    {
      name: "숫자 야구 게임",
      path: "numberBaseball",
    },
    {
      name: "구구단",
      path: "multiplicationTable",
    },
    {
      name: "숫자 맞추기",
      path: "guessingNumbers",
    },
  ];

  const gameBox = (gameName) => {
    games.map((game) => {
      if (game.name === gameName) {
        navigate(`/${game.path}`);
      }
    });
  };
  return (
    <Container>
      <Row>
        {games.map((box, index) => (
          <Col lg={4} md={6} sm={12} key={index}>
            <div className="home-game-box" onClick={() => gameBox(box.name)}>
              <h3>{box.name}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
