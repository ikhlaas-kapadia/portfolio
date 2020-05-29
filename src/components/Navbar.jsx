import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { render } from "@testing-library/react";

const StyledNav = styled.nav`
  display: flex;
  /* width: 100%; */
  height: 100%;
  justify-content: flex-start;
  align-items: center;

  /* border: 3px solid purple; */
`;

const StyledLink = styled(Link)`
  /* flex-basis: 200%; */
  text-align: center;
  width: 120px;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0rem 1rem;
  text-decoration: none;
  letter-spacing: 0.1rem;
  /* border: 1px solid yellow; */
  transition-duration: 0.5s;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 1.2px #7245ad;
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
    border-bottom: solid 1.2px #7245ad;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
`;

export { StyledNav, StyledLink };
