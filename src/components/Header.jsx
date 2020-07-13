import React from "react";
import styled from "styled-components";
import Navigation from "./Navbar";
import ThemeSwitch from "./Theme-Switch";
import SocialMedia from "./Social-Media";

const StyledHeader = styled.header`
  position: fixed;
  background-color: #030303;
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100vw;
  height: 50px;
  z-index: 90;
  color: #ffff;
  display: flex;
`;

const Header = (props) => {
  const { handleClick, toggle, handleToggle } = props;
  return (
    <StyledHeader>
      <Navigation toggle={toggle} handleToggle={handleToggle}></Navigation>
      <ThemeSwitch handleClick={handleClick} round></ThemeSwitch>
      <SocialMedia></SocialMedia>
    </StyledHeader>
  );
};

export default Header;
