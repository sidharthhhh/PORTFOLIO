import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Sidharth Shukla</h1>
        <h5 className="text__light">Full Stack Developer</h5>

        <div className="me"></div>
      </div>
    </header>
  );
};

export default Header;
