import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
const StyledNav = styled.nav`
  display: flex;
  width: 40vw;
  height: 100%;
  align-items: center;
  /* border: 3px solid purple; */
  padding-left: 30px;

  @media ${device.mobileS} {
    width: 20vw;
    /* overflow: hidden; */
    padding-left: 0;
  }
`;

const Dropdown = styled.div`
  height: 100%;
  width: 100%;
  color: white;
`;

const DropdownBtn = styled.button`
  /* border: 1px solid yellow; */
  color: white;
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
  transform: 
    ${(props) => {
      return props.toggle ? "rotate(90deg)" : "none";
    }};
  /* transform: rotate(90deg); */
`;

const DropDownMenu = styled.ul`
  /* border: 1px solid red; */
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 5vh;
  color: black;
  background-color: #38bacb;
  opacity: ${(props) => {
    return props.toggle ? 1 : 0;
  }};
  pointer-events: ${(props) => {
    return props.toggle ? "all" : "none";
  }};
`;
const DropDownItem = styled.li``;

const StyledLink = styled(Link)`
  color: inherit;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0rem 1rem;
  text-decoration: none;
  letter-spacing: 0.1rem;
  /* border: 1px solid red; */
  height: fit-content;
  width: 80px;

  &&:after,
  &&:before {
    display: block;
    content: "";
    border-bottom: solid 1px #2682a8;
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
  @media ${device.mobileS} {
    /* background-color: #f0fdff96; */
    /* overflow: hidden; */
    margin: 0;
  }
`;

const Navigation = (props) => {
  const { handleToggle, toggle } = props;
  console.log(toggle);
  return (
    <StyledNav>
      {/* <StyledLink to="/">Home</StyledLink>
<StyledLink to="/about">About Me</StyledLink>
<StyledLink to="/projects">Projects</StyledLink>
<StyledLink to="/contact">Contact</StyledLink> */}
      <Dropdown>
        <DropdownBtn toggle={toggle}>
          <i className="fas fa-bars" onClick={handleToggle}></i>
        </DropdownBtn>
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
      </Dropdown>
    </StyledNav>
  );
};

export default Navigation;
