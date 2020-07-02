import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
import backgroundImage2 from "../background-images/blue.jpg";
const StyledMain = styled.main`
  border: 1px solid red;
  /* background-image: inherit; */
  /* background-color: #d0faff; */
  /* background-color: #d0faff; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100vw;
  margin-top: 10vh;

  @media ${device.mobileM} {
  }
`;

const StyledHeading = styled.h1`
  margin-top: 10%;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 6%;
`;
const StyledSubHeading = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 2%;
  text-align: center;
`;

const Textbox = styled.section`
  /* border: 1px solid red; */
  /* background-color: #a7f5ff; */
  background-color: #d0faff;
  width: 90%;
  margin: 2% auto;
  padding: 5%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  text-align: justify;
  line-height: 1.2rem;
  margin-top: 0.2rem;
  font-size: 0.8rem;
`;

const About = () => {
  return (
    <StyledMain>
      <StyledHeading>About Me</StyledHeading>
      <Textbox>
        <StyledSubHeading>Tech Stack</StyledSubHeading>
        <Text>JavaScript, PostgreSQL, Node.js, React.js, Express.js</Text>
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
