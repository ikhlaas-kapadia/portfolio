import React from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";
import codingImage from "../background-images/coding.jpg";
import backgroundImage from "../background-images/background.jpg";

const Main = styled.main`
  margin-top: 10vh;
  /* border: 5px solid pink; */
`;

const HeroBox = styled.section`
  height: 80vh;
  width: 100%;
  background-image: linear-gradient(rgba(0,0,33,1.5),rgba(0,0,0,0.5)),url("${backgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* display: flex;
  align-items: center; */
`;
const HeroTextBox = styled.div`
  align-items: center;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeroHeading = styled.h1`
  color: white;
  /* border: 1px solid red; */
  font-size: 6rem;
  letter-spacing: 0.1rem;
  margin: 0;
`;
const HeroSubHeading = styled.h2`
  color: white;
  letter-spacing: 0.1rem;
  color: #c8f70f;
  margin-top: -10px;
`;

render(
  <Main>
    <HeroBox>
      <HeroTextBox>
        <HeroHeading>Ikhlaas Kapadia</HeroHeading>
        <HeroSubHeading>Software Developer</HeroSubHeading>
      </HeroTextBox>
    </HeroBox>
  </Main>
);

export default Main;
