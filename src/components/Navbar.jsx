import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
import DropDownNav from "./Dropdown-Nav";
const StyledNav = styled.nav`
  width: 40%;
  height: 100%;
  border: none;
  @media ${device.laptop} {
    width: 40%;
  }
`;
const NormalNav = styled.div`
  height: 100%;
  width: 100%;
  display: none;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-align: center;
  font-size: inherit;
  font-weight: 400;
  text-decoration: none;
  height: 100%;
  width: 80px;

  &&:after,
  &&:before {
    display: block;
    content: "";
    border-bottom: solid 1px #bdeaf1;
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

  @media ${device.laptop} {
    font-size: 0.85rem;
    height: fit-content;
    align-self: space-evenly;
    text-align: none;
    width: 70px;
  }
`;

const Navigation = (props) => {
  const { handleToggle, toggle } = props;
  return (
    <StyledNav>
      <NormalNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NormalNav>
      <DropDownNav handleToggle={handleToggle} toggle={toggle}></DropDownNav>
    </StyledNav>
  );
};

export default Navigation;
