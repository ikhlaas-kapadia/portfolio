import React from "react";
import styled from "styled-components";
import { StyledLink } from "./Navbar";
import { device } from "../break-points/device-Sizes";

const DropDownContainer = styled.div`
  height: 100%;
  color: white;
  @media ${device.laptop} {
    display: none;
  }
`;

const DropDownMenu = styled.ul`
  width: 100vw;
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: center;
  justify-content: space-evenly;
  min-height: 40px;
  color: #ffff;
  background-color: ${(props) => {
    return props.toggle ? "#030303d9" : "none";
  }};
  opacity: ${(props) => {
    return props.toggle ? 1 : 0;
  }};
  pointer-events: ${(props) => {
    return props.toggle ? "all" : "none";
  }};
  font-size: 0.8rem;
  transition: 0.1s ease-in;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const DropdownBtn = styled.button`
  margin-left: 30px;
  align-self: center;
  justify-content: center;
  outline: none;
  border: none;
  overflow: hidden;
  box-shadow: none;
  color: ${(props) => {
    return props.toggle ? "#aaf3ff" : "white";
  }};
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
  transform: ${(props) => {
    return props.toggle ? "rotate(90deg)" : "none";
  }};
  transition: 0.1s ease-in;
  &&:hover {
    cursor: pointer;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const DropDownNav = (props) => {
  const { toggle, handleToggle } = props;
  return (
    <>
      <BtnContainer>
        <DropdownBtn toggle={toggle}>
          <i className="fas fa-bars" onClick={handleToggle}></i>
        </DropdownBtn>
      </BtnContainer>
      <DropDownContainer>
        <DropDownMenu toggle={toggle}>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About Me</StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">Projects</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </DropDownMenu>
      </DropDownContainer>
    </>
  );
};

export default DropDownNav;
