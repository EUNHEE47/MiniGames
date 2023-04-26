import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <h1 className="animate__animated animate__headShake" onClick={goHome}>
        🎪Welcome To Game World🎪
      </h1>
    </div>
  );
};

export default Header;
