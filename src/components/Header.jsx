import React from "react";
// import Nav from "./Navbar";
import { Link } from "@reach/router";
import styled from "styled-components";
import { StyledLink, StyledNav } from "./Navbar";

const StyledHeader = styled.header`
  position: fixed;
  background-color: ${(props) => {
    return props.click ? "#ffffff" : "#0c0c0c";
  }};
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100%;
  height: 10vh;
  z-index: 90;
  color: ${(props) => {
    return props.click ? "black" : "#ffff";
  }};
`;

const SocialMediaBox = styled.div`
  /* border: 1px solid green; */
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SocialMediaIcon = styled.a`
  /* border: 1px solid yellow; */
  margin: 5%;
  font-size: 2rem;
  transition: all 250ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: #db8e1b;
    transform: scale(1.3);
  }
`;

const SwitchBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-top: 2%;
`;

const SwitchBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const SwitchBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchBoxLabel} {
    background: #277a7d;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      background-color: black;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Header = (props) => {
  const { click } = props;
  console.log(props.click);
  return (
    <StyledHeader click={click}>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledNav>
      <SwitchBoxWrapper>
        <SwitchBox id="checkbox" type="checkbox" onClick={props.handleClick} />
        <SwitchBoxLabel htmlFor="checkbox" />
      </SwitchBoxWrapper>
      <SocialMediaBox>
        <SocialMediaIcon>
          <i className="fab fa-linkedin"></i>
        </SocialMediaIcon>
        <SocialMediaIcon>
          <i className="fab fa-github"></i>
        </SocialMediaIcon>
      </SocialMediaBox>
    </StyledHeader>
  );
};

export default Header;
