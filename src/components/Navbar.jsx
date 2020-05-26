import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { render } from "@testing-library/react";

const StyledLink = styled(Link)`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0rem 2rem;
  text-decoration none;
  border: 1px solid yellow;
`;

const Nav = styled.nav`
  display: flex;
  //   position: fixed;
  width: 100%;
  //   height: 90px;
  justify-content: center;
  align-items: center;
  //   z-index: 999;
  //   text-align: center;
  border: 1px solid purple;
  //   background-color: purple;
`;

render(
  <Nav>
    <StyledLink to="/home">Home</StyledLink>
    <StyledLink to="/about">About Me</StyledLink>
    <StyledLink to="/portfolio">Portfolio</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </Nav>
);

export default Nav;
