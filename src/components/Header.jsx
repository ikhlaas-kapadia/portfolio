import React from "react";

import styled from "styled-components";
import Navigation from "./Navbar";
import Switch from "./Switch";
import SocialMedia from "./Social-Media";

const StyledHeader = styled.header`
  position: fixed;
  background-color: ${(props) => {
    return props.click ? "#ffffff" : "#030303";
  }};

  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100%;
  height: 10vh;
  z-index: 90;
  color: ${(props) => {
    return props.click ? "#030303" : "#ffff";
  }};
`;

const Header = (props) => {
  const { click, handleClick, toggle, handleToggle } = props;
  console.log(handleToggle);
  return (
    <StyledHeader click={click}>
      <Navigation toggle={toggle} handleToggle={handleToggle}></Navigation>
      <Switch handleClick={handleClick}></Switch>
      <SocialMedia></SocialMedia>
    </StyledHeader>
  );
};

export default Header;
