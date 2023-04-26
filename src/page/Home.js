import React from "react";
import { Container, Row } from "react-bootstrap";
import Box from "../component/Box";

const Home = () => {
  const games = [
    "가위 바위 보",
    "숫자 맞추기 게임",
    "숫자 맞추기 게임",
    "숫자 맞추기 게임",
    "숫자 맞추기 게임",
  ];

  return (
    <Container className="home">
      <Row className="home-box-wrap">
        {games.map((item, index) => (
          <Box name={item} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
