import React from "react";
// import Nav from "./Navbar";
import { Link } from "@reach/router";
import styled from "styled-components";
import { render } from "@testing-library/react";

const Header = styled.header`
  position: fixed;
  background-color: #020123;
  //   border: 1px solid green;
  top: 0;
  width: 100%;
  height: 10vh;
  z-index: 90;
`;

const StyledLink = styled(Link)`
  color: #989898;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0rem 2rem;
  text-decoration: none;
  /* border-bottom: 1px solid transparent; */
  transition-duration: 0.5s;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px #019fb6;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
  &:before {
    display: block;
    content: "";
    border-bottom: solid 2px #019fb6;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* border: 3px solid purple; */
`;
render(
  <Header>
    <Nav>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/about">About Me</StyledLink>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Nav>
  </Header>
);

export default Header;
