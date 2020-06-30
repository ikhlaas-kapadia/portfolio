import React from "react";

import styled from "styled-components";
import {
  StyledLink,
  StyledNav,
  DropdownBtn,
  Dropdown,
  DropDownItem,
  DropDownMenu,
} from "./Navbar";
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
      <StyledNav>
        {/* <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink> */}
        <Dropdown>
          <DropdownBtn>
            <i className="fas fa-bars" onClick={handleToggle}></i>
          </DropdownBtn>
          <DropDownMenu toggle={toggle}>
            <DropDownItem>
              <StyledLink to="/">Home</StyledLink>
            </DropDownItem>
            <DropDownItem>
              {" "}
              <StyledLink to="/about">About Me</StyledLink>
            </DropDownItem>
            <DropDownItem>
              {" "}
              <StyledLink to="/projects">Projects</StyledLink>
            </DropDownItem>
            <DropDownItem>
              <StyledLink to="/contact">Contact</StyledLink>
            </DropDownItem>
          </DropDownMenu>
        </Dropdown>
      </StyledNav>
      <Switch handleClick={handleClick}></Switch>
      <SocialMedia></SocialMedia>
    </StyledHeader>
  );
};

export default Header;
