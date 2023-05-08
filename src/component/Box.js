import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Box = ({ name }) => {
  const navigate = useNavigate();

  const goToGame = () => {
    if (name === "가위 바위 보") {
      navigate("/rock");
    } else if (name === "구구단") {
      navigate("/multi");
    } else if (name === "숫자 야구 게임") {
      navigate("/numberBaseball");
    }
  };

  return (
    <Col lg={4} md={4} sm={12}>
      <div onClick={goToGame} className="home-box">
        <h3>{name}</h3>
      </div>
    </Col>
  );
};

export default Box;
