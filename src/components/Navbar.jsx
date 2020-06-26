import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;

  /* border: 3px solid purple; */
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0rem 1rem;
  text-decoration: none;
  letter-spacing: 0.1rem;
  /* border: 1px solid red; */
  height: fit-content;

  &&:after,
  &&:before {
    display: block;
    content: "";
    border-bottom: solid 1px #ffb249;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &&:before {
    width: 100%;
  }

  &&:hover:after,
  &&:hover:before {
    transform: scaleX(1);
  }
`;

export { StyledNav, StyledLink };
