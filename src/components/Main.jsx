import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "@reach/router";
import backgroundImage from "../background-images/coding.jpg";
import backgroundImage2 from "../background-images/blue.jpg";
import { device } from "../break-points/device-Sizes";

const theme = { main: backgroundImage2, alternate: backgroundImage };
const StyledMain = styled.main`
  margin-top: 10vh;
  /* border: 5px solid pink; */
  height: 90vh;
  width: 100vw;

  background-image: ${(props) => {
    console.log(props.click);
    return props.click
      ? `linear-gradient(
      to bottom,
      #0c0c0c,
      rgba(150, 148, 148, 0.59),
      rgba(14, 14, 14, 0),
      rgba(244, 244, 244)
    ),url(${backgroundImage})`
      : `url(${backgroundImage2})`;
  }};

  /* background-color: grey; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  0% {
    width : 0%;
    color: transparent;
  }
  30%{
    color: transparent;
  }
 
  100% {
    width: 100%
  }
`;

const HeroBox = styled.section`
  /* border: 1px solid red; */
  height: 80%;
  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  padding-left: 3%;
  justify-content: center;
  align-items: flex-start;
  color: #1f2833;
  animation: 0.7s ${fadeIn};
  @media ${device.mobileS} {
    height: 50%;
    justify-content: flex-start;
    align-items: center;
  }
`;

const HeroHeading = styled.h1`
  /* border: 1px solid yellow; */
  /* text-align: center; */
  width: 100%;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 0.3rem;
  /* margin-bottom: 1rem; */
  /* background-color: #00000042; */
  font-family: inherit;
  margin: 0;
  padding-left: 50px;
  @media ${device.mobileS} {
    font-size: 1.8rem;
    font-weight: 600;
    padding-left: 0;
    text-align: center;
  }
  @media ${device.mobileM} {
    font-size: 2.1rem;
  }
`;

const HeroText = styled.p`
  /* border: 1px solid red; */
  width: 70%;
  font-weight: 400;
  font-size: 1.2rem;
  /* text-align: center; */
  line-height: 2rem;
  /* background-color: black; */
  padding-left: 50px;
  @media ${device.mobileS} {
    font-size: 1rem;
    padding-left: 0;
    /* padding-right: 10px; */
    text-align: center;
    width: 90%;
    line-height: 1.5rem;
    margin-top: 50px;
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
    width: 80%;
  }
`;

const fadeInButton = keyframes`
  0% {
  margin-top: 1000px;
  display: hidden;
   width: 0%;
   color: transparent;
  }
  80%{
   display: inline-flex;
    width: 20%;
  }
  100%{
    color: white;
    width: fit-content;
  }
 
`;

const ButtonContainer = styled.div`
  /* border: 1px solid red; */
  height: 20%;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  animation: 0.7s ${fadeInButton};
`;

const ProjectButton = styled(Link)`
  border: 0.5px solid #00000094;
  width: fit-content;
  padding: 1rem;
  font-size: 0.9rem;
  text-decoration: none;
  color: #adf3ff;
  background-color: #030303cc;
  &:hover {
    background-color: #083942;
  }
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.mobileM} {
    font-size: 1rem;
  }
`;

class Main extends Component {
  state = {
    about: `＜ A Software Developer passionate about learning new things and
  progressing further />`,
  };
  render() {
    const { about } = this.state;
    return (
      <StyledMain theme={theme} click={this.props.click}>
        <HeroBox>
          <HeroHeading>Ikhlaas Kapadia</HeroHeading>
          <HeroText>{about}</HeroText>
        </HeroBox>
        <ButtonContainer>
          {" "}
          <ProjectButton to="/projects">Check Out My Work</ProjectButton>
        </ButtonContainer>
      </StyledMain>
    );
  }
  typeWriter = () => {
    const { about } = this.state;
    const characterArray = [];
    for (let i = 0; i < about.length; i++) {
      return <HeroText>{about[i]}</HeroText>;
    }
  };
}

export default Main;
