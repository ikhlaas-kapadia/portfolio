import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
import backgroundImage2 from "../background-images/blue.jpg";
const StyledMain = styled.main`
  /* border: 1px solid red; */
  /* background-image: inherit; */
  /* background-color: #d0faff; */
  /* background-color: #d0faff; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100vw;
  margin-top: 50px;
`;

const StyledHeading = styled.h1`
  margin-top: 4%;
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 1%;
  @media ${device.tablet} {
    margin-top: 2%;
  }
`;
const StyledSubHeading = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1%;
  text-align: center;
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const Textbox = styled.section`
  /* border: 1px solid red; */
  /* background-color: #a7f5ff; */
  background-color: #dffbff;
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
  font-size: 0.8rem;
  @media ${device.tablet} {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

const About = () => {
  return (
    <StyledMain>
      <StyledHeading>About Me</StyledHeading>
      <Textbox>
        <StyledSubHeading>Tech Stack</StyledSubHeading>
        <Text>
          JavaScript, PostgreSQL, Node.js, React.js, Express.js, Reach-Router,
          Axios, React Styled Components.
        </Text>
      </Textbox>
      <Textbox>
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
      <Textbox>
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
