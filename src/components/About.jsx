import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  border: 3px solid pink;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  width: 80%;
  margin: 0 auto;
  margin-top: 10vh;
`;

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: normal;
`;
const StyledSubHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const Textbox = styled.section`
  margin-bottom: 1rem;
  text-align: justify;
`;

const Text = styled.p`
  line-height: 2rem;
  margin-top: 0.2rem;
`;


const About = () => {
  return (
    <StyledMain>
      <StyledHeading>About Me</StyledHeading>
      <StyledSubHeading>Who Am I?</StyledSubHeading>
      <Textbox>
        <Text>
          My name is Ikhlaas Kapadia and I'm a Software Developer. If you find
          my name difficult to pronounce my nickname is Ricky. My past
          professional experience has been primarily in Supply Chain Management
          and Accounting where I have worked in both FTSE 100 companies and
          small organisations.
        </Text>
      </Textbox>
      <StyledSubHeading>My Journey To Software Development</StyledSubHeading>
      <Textbox>
        <Text>
          I began learning html and css towards the end of 2019 using Udemy and
          Freecodecamp in the evenings after my day job. It was quite rewarding
          to create a mock google homepage and I was hooked which led me to
          learn Javascript. I would often say to myself "Hey! I wouldn't mind
          doing this as a career".<br></br>
          <br></br>So, I finally decided to take a leap by investing in a full
          time coding bootcamp at Northcoders to drive my career in a new
          direction. During the bootcamp, I learnt the fundamentals of
          Javascript, built servers using MVC framework and REST APIs. I also
          created databases using PostgreSQL and front end applications using
          React.js. My final project was a full stack mobile application where I
          learnt MongoDB, Mongoose, Sockets.io, Flutter and Dart.
        </Text>
      </Textbox>
      <StyledSubHeading>Future Plans</StyledSubHeading>
      <Textbox>
        <Text>
          {" "}
          After graduating in May 2020, I continue to hone my skills by creating
          mini applications and reviewing diffciult concepts. I'm looking for a
          job where I can fulfill my passion to learn more and progress further.
        </Text>
      </Textbox>
    </StyledMain>
  );
};

export { About, StyledMain, StyledHeading };
