import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1
        className="animate__animated animate__flash"
        onClick={() => navigate("/")}
      >
        🎪Mini Games🎪
      </h1>
    </div>
  );
};

export default Header;
