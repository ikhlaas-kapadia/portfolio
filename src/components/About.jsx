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
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3%;
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
  box-shadow: 1px 1px 2.5px 2.1px ${(props) => props.theme.border};
  width: 90%;
  margin: 3% auto;
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
    margin: 1.3% auto;
  }
`;

const Text = styled.p`
  text-align: justify;
  line-height: 1.3rem;
  margin-top: 0.2rem;
  font-size: 0.85rem;
  @media ${device.tablet} {
    /* font-size: 0.9rem; */
    line-height: 1.5rem;
  }
`;

const About = (props) => {
  const { theme, click } = props;
  return (
    <StyledMain click={click} theme={theme}>
      <StyledHeading>About Me</StyledHeading>
      <Textbox theme={theme}>
        <StyledSubHeading>Skills</StyledSubHeading>
        <Text>
          JavaScript, PostgreSQL, Node.js, React.js, Express.js, Reach-Router,
          Axios, React Styled Components, Git version control, TDD and pair
          programming.
        </Text>
      </Textbox>
      <Textbox theme={theme}>
        <StyledSubHeading>Who Am I?</StyledSubHeading>
        <Text>
          I'm Ikhlaas Kapadia, an aspiring software developer looking for
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
          Freecodecamp in the evenings after my day job. My interest in coding
          was solidified after dipping my toes in Javascript and UI
          interactivity. In January 2020, I enrolled on a full time coding
          bootcamp at Northcoders where I learnt the fundamentals of Javascript,
          built servers using MVC framework and created REST APIs. I also
          created databases using PostgreSQL and front end applications with
          React.js. My final project was a full stack mobile application where I
          learnt MongoDB, Mongoose and Sockets.io.
        </Text>
      </Textbox>
    </StyledMain>
  );
};

export { About, StyledMain, StyledHeading };
