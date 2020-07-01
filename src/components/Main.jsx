import React from "react";

import styled from "styled-components";
import backgroundImage from "../background-images/coding.jpg";
import backgroundImage2 from "../background-images/blue.jpg";
import HeroSection from "./HeroSection";

const theme = { main: backgroundImage2, alternate: backgroundImage };

const StyledMain = styled.main`
  margin-top: 10vh;
  /* border: 1px solid black; */
  height: 90vh;
  width: 100vw;
  max-height: 90vh;
  max-width: 100vw;

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
