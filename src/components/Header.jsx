import React from "react";
// import Nav from "./Navbar";
import { Link } from "@reach/router";
import styled from "styled-components";
import { render } from "@testing-library/react";

const Header = styled.header`
  position: fixed;
  background-color: #073e77;
  //   border: 1px solid green;
  top: 0;
  width: 100%;
  height: 10vh;
  z-index: 90;
`;

const StyledLink = styled(Link)`
  color: #c8f70f;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0rem 2rem;
  text-decoration: none;
  border: 1px solid yellow;
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
