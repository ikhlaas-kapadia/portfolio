import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  margin-top: 50px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const StyledHeading = styled.h1`
  margin-top: 4%;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1%;
  @media ${device.tablet} {
    margin-top: 2%;
  }
`;
const StyledSubHeading = styled.h2`
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 1%;
  text-align: center;
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const Textbox = styled.section`
  background-color: ${(props) => props.theme.textBackground};
  width: 90%;
  margin: 1% auto;
  padding: 3% 4%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.mobileL} {
    width: 80%;
  }
  @media ${device.tablet} {
    padding: 2% 4%;
    height: 2%;
    align-items: flex-start;
    justify-content: flex-start;
    width: 70%;
    margin: 0.5% auto;
  }
`;

const Text = styled.p`
  text-align: justify;
  line-height: 1.2rem;
  margin-top: 0.2rem;
  font-size: 0.7rem;
  @media ${device.tablet} {
    font-size: 0.85rem;
    line-height: 1.5rem;
  }
`;

const About = (props) => {
  const { theme, click } = props;
  return (
    <StyledMain click={click} theme={theme}>
      <StyledHeading>About Me</StyledHeading>
      <Textbox theme={theme}>
        <StyledSubHeading>Tech Stack</StyledSubHeading>
        <Text>
          JavaScript, PostgreSQL, Node.js, React.js, Express.js, Reach-Router,
          Axios, React Styled Components.
        </Text>
      </Textbox>
      <Textbox theme={theme}>
        <StyledSubHeading>Who Am I?</StyledSubHeading>
        <Text>
          I'm Ikhlaas Kapadia and if you find my name difficult to pronounce, my
          nickname is Ricky. I'm an aspiring software developer looking for
          opportunites where I can fulfill my passion to learn more and develop
          my coding skills in a commerical environment. My past professional
          experience has been primarily in Supply Chain Management and
          Accounting where I have worked in both FTSE 100 companies and small
          organisations.
        </Text>
      </Textbox>
      <Textbox theme={theme}>
        <StyledSubHeading>My Journey To Software Development</StyledSubHeading>
        <Text>
          I began learning html and css towards the end of 2019 using Udemy and
          Freecodecamp in the evenings after my day job. I found UX design
          really enjoyable and I soon transitioned over to Javascript by which
          point I was convinced to launch a new career in software development.
          I invested in a full time coding bootcamp at Northcoders to commit
          myself to code full time. During the bootcamp I learnt fundamentals of
          Javascript, built servers using MVC framework and REST APIs. I also
          created databases using PostgreSQL and front end applications with
          React.js. My final project was a full stack mobile application where I
          learnt MongoDB, Mongoose and Sockets.io.
        </Text>
      </Textbox>
    </StyledMain>
  );
};

export { About, StyledMain, StyledHeading };
