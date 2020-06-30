import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";

import demo from "../videos/demo1.mp4";
import hubertImage from "../images/hubert.jpg";

import styles from "../Projects.module.css";

const ProjectsContainer = styled.section`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`;

const IndividualProject = styled.article`
  width: 45%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  background-color: #ffb03a;
  color: #0d0d0d;
  border: 2px solid black;
  border-radius: 5%;
  margin: 2%;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 1% 0 1% 0;
  text-align: center;
`;
const ProjectDescription = styled.p`
  padding: 3% 3% 0 3%;
  font-size: 0.8rem;
  font-weight: regular;
  margin: 0;
  text-align: justify;
`;

const ProjectLinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const ProjectLinkBox = styled.a`
  text-decoration: none;
  display: block;
  border: 1px solid black;
  width: 30%;
  height: 70%;
  border-radius: 4%;
  font-size: 1rem;
  background-color: #ffc773;
  color: #0d0d0d;

  &&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const ProjectLinkText = styled.span`
  padding-top: 7%;
  text-align: center;
  height: 100%;
  display: block;
  /* border: 1px solid red; */
`;
const ProjectImage = styled.img.attrs((props) => ({ src: hubertImage }))`
  border: 1px solid red;
  height: 50%;
  width: 30%;
  text-align: center;
  margin: 0 auto;
  background-color: grey;
`;

const Projects = () => {
  return (
    <StyledMain>
      <StyledHeading>Projects</StyledHeading>
      <ProjectsContainer>
        <IndividualProject>
          <ProjectTitle>NC News</ProjectTitle>
          <video className={styles.ProjectDemo} loop autoplay="true">
            {" "}
            <source src={demo} type="video/mp4"></source>
          </video>
          <ProjectDescription>
            A full stack Reddit style web application. Allows visitors to view
            articles and filter by topic author and other criteria. The backend
            comprises of a RESTful API server created using TDD which serves
            articles by authors. The front end was created using React.
            <br></br>
            <br></br>
            Tech Stack: JavaScript, React, PostgreSQL, Knex, Axios, Express,
            Node JS, Reach Router, Moment.
          </ProjectDescription>
          <ProjectLinksContainer>
            <ProjectLinkBox
              href="https://www.youtube.com/watch?v=wi_zpSYNBdw"
              target="_blank"
            >
              <ProjectLinkText>Live Site</ProjectLinkText>
            </ProjectLinkBox>
            <ProjectLinkBox>
              <ProjectLinkText>Code</ProjectLinkText>
            </ProjectLinkBox>
          </ProjectLinksContainer>
        </IndividualProject>
        <IndividualProject>
          <ProjectTitle>Hubert</ProjectTitle>
          <ProjectImage></ProjectImage>
          <ProjectDescription>
            A full stack cross platform hide and seek game for mobile. Users can
            create an account, create a lobby and play with other players. The
            app uses live google map tracking enabling the hider to see the
            seeker in real time. The backend was created using MongoDB and the
            front end with Flutter.
            <br></br>
            <br></br>
            Tech Stack: JavaScript, Flutter, Dart Socket.IO, Express JS, Node
            JS, MongoDB, Mongoose, BCrypt Hash, JWT.
          </ProjectDescription>
        </IndividualProject>
        <IndividualProject>
          <ProjectTitle>Portfolio Site</ProjectTitle>
          <ProjectDescription>
            My Portfolio page showcasing my projects and skills.
            <br></br>
            <br></br>
            Tech Stack: React.js, React Styled Components, Reach Router and
            HTML/CSS.
          </ProjectDescription>
        </IndividualProject>
        <IndividualProject>
          <ProjectTitle>Noughts And Crosses</ProjectTitle>
          <ProjectDescription>
            My Portfolio page created using React.js, React Styled Components,
            Reach Router and HTML/CSS.
            <br></br>
            <br></br>
            Tech Stack: JavaScript, React, PostgreSQL, Knex, Axios, Express,
            Node JS, Reach Router, Moment.
          </ProjectDescription>
        </IndividualProject>
        <IndividualProject>
          <ProjectTitle>Meteorite Visualisation App</ProjectTitle>
          <ProjectDescription>
            A simple web page utilising the NASA api to fetch meteorite data
            with the option to filter by any mass.
            <br></br>
            <br></br>
            Tech Stack: JavaScript, React, Axios, Express, Node JS, Reach
            Router, React Styled-Components, CSS Modules
          </ProjectDescription>
        </IndividualProject>
      </ProjectsContainer>
    </StyledMain>
  );
};

export default Projects;
