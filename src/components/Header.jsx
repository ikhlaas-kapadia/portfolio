import React from "react";
// import Nav from "./Navbar";
import { Link } from "@reach/router";
import styled from "styled-components";
import { StyledLink, StyledNav } from "./Navbar";

const StyledHeader = styled.header`
  position: fixed;
  background-color: #060001;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100%;
  height: 10vh;
  z-index: 90;
`;

const SocialMediaBox = styled.div`
  color: white;
  /* border: 1px solid green; */
  width: 100%;
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
    color: #7245ad;
    transform: scale(1.5);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledNav>
      <SocialMediaBox>
        <SocialMediaIcon>
          <i class="fab fa-linkedin"></i>
        </SocialMediaIcon>
        <SocialMediaIcon>
          <i class="fab fa-github"></i>
        </SocialMediaIcon>
      </SocialMediaBox>
    </StyledHeader>
  );
};

export default Header;
