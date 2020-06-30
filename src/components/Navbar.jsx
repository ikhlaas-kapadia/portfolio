import { Link } from "@reach/router";
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
  /* border: 1px solid yellow; */
`;

const DropdownBtn = styled.button`
  color: white;
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
`;

const DropDownMenu = styled.ul`
  margin: 0;
  list-style: none;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: space-evenly;
  justify-content: space-evenly;
  width: 100vw;
  color: black;
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
  font-size: 0.9rem;
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
    background-color: #f0fdff96;
    /* overflow: hidden; */
  }
`;

export {
  StyledNav,
  StyledLink,
  DropdownBtn,
  Dropdown,
  DropDownMenu,
  DropDownItem,
};
