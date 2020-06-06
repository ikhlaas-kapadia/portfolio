import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import backgroundImage from "../background-images/background.jpg";

const StyledMain = styled.main`
  margin-top: 10vh;
  /* border: 5px solid pink; */
  background-image: 
  linear-gradient(to bottom,#0c0c0c,rgba(13, 13, 13, 0.85),rgba(0, 0, 0, 0),rgba(255,255,255,0)),
    /* url("./background-images/coding.jpg"); */
   
url("${backgroundImage}");
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
  margin-bottom: 10px;
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
  border: 2px solid whitesmoke;
  width: fit-content;
  margin-top: 1rem;
  padding: 1rem;
  text-decoration: none;
  color: white;
  background-color: #00000094;
  &:hover {
    background-color: #000000c7;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <HeroBox>
        <HeroHeadings>
          <HeroHeading>Ikhlaas Kapadia</HeroHeading>
        </HeroHeadings>
        <HeroTextBox>
          ＜ A Software Developer passionate about learning new things and
          progressing further />
          {/* <ProjectButton>Check My work</ProjectButton> */}
        </HeroTextBox>
        <ProjectButton to="/projects">Check Out My Work</ProjectButton>
      </HeroBox>
    </StyledMain>
  );
};

export default Main;
