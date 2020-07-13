import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";
import { device } from "../break-points/device-Sizes";
import ncImage from "../assets/images/nc.png";
import hubertImage from "../assets/images/hubert.png";
import gameImage from "../assets/images/game.png";

const StyledSpan = styled.span`
  display: inline-block;
  text-decoration: underline;
  font-weight: 600;
  text-align: left;
`;

const LinksContainer = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  display: flex;
  width: 90%;
  bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    align-self: flex-end;
    position: static;
    width: 65%;
    max-height: 100%;
    flex-wrap: nowrap;
  }
`;

const LinkBox = styled.a`
  display: block;
  border: 1px solid black;
  width: 100px;
  height: 25px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.65rem;
  font-weight: 600;
  background-color: #ffffff;
  color: #030303;
  margin: 2%;

  &&:hover {
    transform: scale(1.05);
    cursor: pointer;
    opacity: 0.95;
  }
`;
const LinkText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  height: 90%;
  width: 100%;
`;



const ProjectLinks = () => {
    return (
        <div>
            
        </div>
    );
};

export default componentName;
