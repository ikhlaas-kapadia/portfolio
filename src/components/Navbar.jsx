import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
const StyledNav = styled.nav`
  width: 20vw;
  height: 100%;
  border: none;
  /* border: 4px solid purple; */
  @media ${device.tablet} {
    width: 20vw;
  }
  @media ${device.laptop} {
    width: 45vw;
  }
`;
const NormalNav = styled.div`
  height: 100%;
  width: 100%;
  display: none;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    align-items: center;
    justify-content: space-evenly;
  }
`;
const DropDownNav = styled.div`
  height: 100%;
  width: 100vw;
  color: white;
  @media ${device.laptop} {
    display: none;
  }
`;

const DropdownBtn = styled.button`
  /* overflow: hidden; */
  outline: none;
  color: ${(props) => {
    return props.toggle ? "#aaf3ff" : "white";
  }};
  height: 100%;
  width: 80%;
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
  transform: ${(props) => {
    return props.toggle ? "rotate(90deg)" : "none";
  }};
  transition: 0.2s ease-in;
  &&:hover {
    cursor: pointer;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const DropDownMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 30px;
  color: #ffff;
  background-color: #030303d9;
  opacity: ${(props) => {
    return props.toggle ? 1 : 0;
  }};
  pointer-events: ${(props) => {
    return props.toggle ? "all" : "none";
  }};
  font-size: 0.8rem;
  transition: 0.2s ease-in;
`;
const DropDownItem = styled.li``;

const StyledLink = styled(Link)`
  /* border: 1px solid red; */
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
    border-bottom: solid 1px #6eeeff;
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
    /* border: 1px solid yellow; */
    font-size: 1rem;
    height: fit-content;
    align-self: center;
    text-align: none;
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
      <DropdownBtn toggle={toggle}>
        <i className="fas fa-bars" onClick={handleToggle}></i>
      </DropdownBtn>
      <DropDownNav>
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
      </DropDownNav>
    </StyledNav>
  );
};

export default Navigation;
