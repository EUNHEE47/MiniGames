import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Box = ({ name }) => {
  const navigate = useNavigate();

  const goToGame = () => {
    if (name === "가위 바위 보") {
      navigate("/rock");
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
