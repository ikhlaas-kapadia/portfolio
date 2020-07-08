import React from "react";
import { device } from "../break-points/device-Sizes";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../background-images/coding.jpg";
import backgroundImage2 from "../background-images/blue.jpg";
import HeroSection from "./HeroSection";

const theme = { main: backgroundImage2, alternate: backgroundImage };

const FadeIn = keyframes`from{margin-top: -700px;, color:transparent;} to {margin-top: 0, color:transparent;}`;

const FadeIn756 = keyframes`from{margin-top: -1500px;, color:transparent;} to {margin-top: 0, color:transparent;}`;
const StyledMain = styled.main`
  margin-top: 50px;
  border: 1px solid black;
  height: calc(100vh - 50px);
  width: 100vw;
  animation: ${FadeIn} 0.8s linear normal;
  @media ${device.tablet} {
    margin-top: 7vh;
    height: 93vh;
    max-height: 93vh;
    animation: ${FadeIn756} 1s linear normal;
  }
  }

  background-image: ${(props) => {
    return props.click
      ? `linear-gradient(
      to bottom,
      #0c0c0c,
      rgba(150, 148, 148, 0.59),
      rgba(14, 14, 14, 0),
      rgba(244, 244, 244))url(${backgroundImage})`
      : `url(${backgroundImage2})`;
  }};
  /* background-color: grey; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Main = (props) => {
  return (
    <StyledMain theme={props.theme} click={props.click}>
      <HeroSection></HeroSection>
    </StyledMain>
  );
};

export default Main;
