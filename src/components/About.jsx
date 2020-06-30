import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 8vh;
`;

const StyledHeading = styled.h1`
  align-self: center;
  font-size: 3.5rem;
  font-weight: normal;
  margin-bottom: 2%;
`;
const StyledSubHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const Textbox = styled.section`
  text-align: justify;
`;

const Text = styled.p`
  line-height: 1.7rem;
  margin-top: 0.2rem;
`;

const About = () => {
  return (
    <StyledMain>
      <StyledHeading>About Me</StyledHeading>
      <Textbox>
        <StyledSubHeading>Who Am I?</StyledSubHeading>
        <Text>
          My name is Ikhlaas Kapadia and I'm an aspiring Software Developer. If
          you find my name difficult to pronounce my nickname is Ricky. My past
          professional experience has been primarily in Supply Chain Management
          and Accounting where I have worked in both FTSE 100 companies and
          small organisations.
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
          myself to code full time. During the bootcamp I learnt the
          fundamentals of Javascript, built servers using MVC framework and REST
          APIs. I also created databases using PostgreSQL and front end
          applications with React.js. My final project was a full stack mobile
          application where I learnt MongoDB, Mongoose and Sockets.io.
        </Text>
      </Textbox>
      <Textbox>
        <StyledSubHeading>Future Plans</StyledSubHeading>
        <Text>
          {" "}
          After graduating in May 2020, I continue to hone my skills by creating
          mini applications, reviewing diffciult concepts and learning new
          languages. I'm looking for opportunites where I can fulfill my passion
          to learn more and hone my coding skills.
        </Text>
      </Textbox>
    </StyledMain>
  );
};

export { About, StyledMain, StyledHeading };
