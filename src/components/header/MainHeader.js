import React from "react";
import logo from "../../assests/images/logo.png";
import HeaderContent from "./HeaderContent";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="head">
      <img src={logo} alt="Logo" className="logo" />
      <HeaderContent role="teacher" />
    </header>
  );
};

export default MainHeader;
