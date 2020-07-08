import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "@reach/router";
import { device } from "../break-points/device-Sizes";

const HeroBox = styled.section`
  /* border: 1px solid red; */
  min-height: 310px;
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1f2833;
`;

const HeroHeading = styled.h1`
  /* border: 1px solid blue; */
  width: 80%;
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-family: inherit;
  margin-bottom: 20px;
  color: black;
  @media ${device.mobileM} {
    /* font-size: 2.3rem; */
  }
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const HeroText = styled.p`
  /* border-right: 1px solid red; */
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
  /* border: 1px solid red; */
  height: 30%;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ProjectButton = styled(Link)`
  border: 0.5px solid #00000094;
  width: fit-content;
  padding: 1rem;
  font-size: 0.7rem;
  text-decoration: none;
  color: #adf3ff;
  background-color: #030303cc;
  &:hover {
    background-color: #083942;
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
    const { about } = this.state;
    return (
      <>
        <HeroBox>
          <HeroHeading>Ikhlaas Kapadia</HeroHeading>
          <HeroText>{about}</HeroText>

          {/* {this.typeWriter()} */}
        </HeroBox>
        <ButtonContainer>
          <ProjectButton to="/projects">Check Out Projects</ProjectButton>
        </ButtonContainer>
      </>
    );
  }
}

export default HeroSection;
