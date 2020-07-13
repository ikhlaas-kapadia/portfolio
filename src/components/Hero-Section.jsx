import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "@reach/router";
import { device } from "../break-points/device-Sizes";

const FadeIn = keyframes`from{margin-left: -1000px;} to {margin-left: 0}`;
const HeroBox = styled.section`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color};
  animation: ${FadeIn} 0.4s linear normal;
`;

const HeroHeading = styled.h1`
  width: 80%;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-family: inherit;
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const HeroText = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.5rem;

  @media ${device.tablet} {
    padding-right: 10%;
    font-size: 0.9rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  height: 30%;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 0.4s linear normal;
`;

const ProjectButton = styled(Link)`
  border: 0.5px solid #00000094;
  width: fit-content;
  padding: 1rem;
  font-size: 0.7rem;
  text-decoration: none;
  color: ${(props) => (props.click ? "#ffff}" : "#adf3ff")};
  background-color: ${(props) => (props.click ? "#40404078}" : "#030303cc")};

  &:hover {
    background-color: ${(props) => (props.click ? "#030303bb}" : "#083942")};
  }
  @media ${device.laptop} {
    font-size: 0.8rem;
  }
`;

class HeroSection extends Component {
  state = {
    about: `＜ A Software Developer passionate about learning new things and
    progressing further />`,
  };
  render() {
    const { theme, click } = this.props;
    const { about } = this.state;
    return (
      <>
        <HeroBox theme={theme} click={click}>
          <HeroHeading>Ikhlaas Kapadia</HeroHeading>
          <HeroText>{about}</HeroText>
        </HeroBox>
        <ButtonContainer>
          <ProjectButton to="/projects" theme={theme} click={click}>
            Check Out Projects
          </ProjectButton>
        </ButtonContainer>
      </>
    );
  }
}

export default HeroSection;
