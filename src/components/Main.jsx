import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import backgroundImage from "../background-images/coding.jpg";
import backgroundImage2 from "../background-images/gold.jpg";

const theme = { main: backgroundImage2, alternate: backgroundImage };
const StyledMain = styled.main`
  margin-top: 10vh;
  /* border: 5px solid pink; */
  background-image: linear-gradient(
      to bottom,
      #0c0c0c,
      rgba(16, 16, 16, 0.42),
      rgba(14, 14, 14, 0),
      rgba(255, 255, 255, 0.17)
    ),
    url({${backgroundImage2}});

  background-image: ${(props) => {
    console.log(props.click);
    return props.click
      ? `linear-gradient(
      to bottom,
      #ffff,
      rgba(150, 148, 148, 0.59),
      rgba(14, 14, 14, 0),
      rgba(244, 244, 244)
    ),url(${backgroundImage})`
      : `linear-gradient(
      to bottom,
      #0c0c0c,
      rgba(16, 16, 16, 0.42),
      rgba(14, 14, 14, 0),
      rgba(0, 0, 1)
    ),url(${backgroundImage2})`;
  }};

  /* background-color: grey; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
const HeroBox = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeroHeadings = styled.section`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

const HeroHeading = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 0.3rem;
  /* margin-bottom: 1rem; */
  background-color: #00000042;
  font-family: "Dancing Script";
`;

const HeroTextBox = styled.section`
  /* border: 1px solid red; */
  font-weight: 400;
  font-size: 1.2rem;
  color: #b3afaf;
  text-align: center;
  line-height: 2rem;
  background-color: black;
`;

const ProjectButton = styled(Link)`
  border: 1px solid whitesmoke;
  width: fit-content;
  margin-top: 1rem;
  padding: 1rem;
  text-decoration: none;
  color: white;
  background-color: #000000c7;
  &:hover {
    background-color: #00000040;
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
          <HeroHeadings>
            <HeroHeading>Ikhlaas Kapadia</HeroHeading>
          </HeroHeadings>

          <ProjectButton to="/projects">Check Out My Work</ProjectButton>
        </HeroBox>
      </StyledMain>
    );
  }
  typeWriter = () => {
    const { about } = this.state;
    const characterArray = [];
    for (let i = 0; i < about.length; i++) {
      return <HeroTextBox>{about[i]}</HeroTextBox>;
    }
  };
}

export default Main;
