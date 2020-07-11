import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background-images/blue.png";
import backgroundImage2 from "../assets/background-images/coding.png";
import HeroSection from "./HeroSection";

const StyledMain = styled.main`
  margin-top: 50px;
  height: calc(100vh - 50px);
  width: 100vw;
  background-image: ${(props) => {
    return props.click
      ? `linear-gradient(
      to bottom, #030303, rgba(3, 3, 3, 0.84), rgba(3, 3, 3, 0.73)),url(${backgroundImage2})`
      : `url(${backgroundImage})`;
  }};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Main = (props) => {
  const { click, theme } = props;
  return (
    <StyledMain click={click}>
      <HeroSection theme={theme} click={click}></HeroSection>
    </StyledMain>
  );
};

export default Main;
