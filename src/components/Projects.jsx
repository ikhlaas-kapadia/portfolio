import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";

import demo from "../videos/demo1.mp4";
import hubertImage from "../images/hubert.jpg";

import styles from "../Projects.module.css";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
  /* flex-wrap: wrap;  */
`;

const IndividualProject = styled.article`
  width: 90%;
  height: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #c7f8ff;
  color: #0d0d0d;
  border: 2px solid black;
  border-radius: 5%;
  margin: 2% auto;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 4%;
  text-align: center;
  height: 10%;
`;
const ProjectDescription = styled.p`
  /* border: 1px solid red; */
  padding: 3% 3% 0 3%;
  font-size: 0.8rem;
  font-weight: regular;
  text-align: justify;
  height: 30%;
`;

const ProjectLinksContainer = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const ProjectLinkBox = styled.a`
  text-decoration: none;
  border: 1px solid black;
  min-width: 40%;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-radius: 4%;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #000000;
  color: #ffffff;
  margin: 2%;

  &&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const ProjectLinkText = styled.span`
  display: block;
  margin: 0 auto;
  height: 90%;
  width: 100%;
  text-align: center;
  /* border: 1px solid blue; */
`;

const StyledSpan = styled.span`
  text-decoration: underline;
`;
const ProjectImage = styled.img.attrs((props) => ({ src: hubertImage }))`
  /* border: 1px solid red; */
  height: 150px;
  object-fit: fill;
  width: 30%;
  text-align: center;
  margin: 0 auto;
  background-color: grey;
`;
const ProjectVideo = styled.video`
  /* border: 1px solid red; */
  min-height: 150px;
  object-fit: fill;
  /* height: 60%; */
  width: 100%;
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
          <ProjectVideo loop autoplay="true">
            <source src={demo} type="video/mp4"></source>
          </ProjectVideo>
          <ProjectDescription>
            A full stack Reddit style web application. Allows visitors to view
            articles and filter by topic author and other criteria. The backend
            comprises of a RESTful API server created using TDD which serves
            articles by authors.
            <br></br>
            <br></br>
            <StyledSpan>Tech Stack:</StyledSpan> JavaScript, React, PostgreSQL,
            Knex, Axios, Express, Node JS, Reach Router, Moment.
          </ProjectDescription>
          <ProjectLinksContainer>
            <ProjectLinkBox
              href="https://ikhlaas-nc-news.netlify.app/"
              target="_blank"
            >
              <ProjectLinkText> FE Live Site </ProjectLinkText>
            </ProjectLinkBox>
            <ProjectLinkBox
              href="https://github.com/ikhlaas-kapadia/nc-news"
              target="_blank"
            >
              <ProjectLinkText> FE Code</ProjectLinkText>
            </ProjectLinkBox>
            <ProjectLinkBox
              href="https://news-app-ikhlaas.herokuapp.com/api"
              target="_blank"
            >
              <ProjectLinkText>BE Live Site</ProjectLinkText>
            </ProjectLinkBox>
            <ProjectLinkBox
              href="https://github.com/ikhlaas-kapadia/nc_news_backend"
              target="_blank"
            >
              <ProjectLinkText>BE Code</ProjectLinkText>
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
            seeker in real time.
            <br></br>
            <br></br>
            Tech Stack: JavaScript, Flutter, Dart Socket.IO, Express JS, Node
            JS, MongoDB, Mongoose, BCrypt Hash, JWT.
          </ProjectDescription>
          <ProjectLinksContainer>
            <ProjectLinkBox
              href="https://www.youtube.com/watch?v=wi_zpSYNBdw"
              target="_blank"
            >
              <ProjectLinkText>Demo Video</ProjectLinkText>
            </ProjectLinkBox>
          </ProjectLinksContainer>
        </IndividualProject>

        <IndividualProject>
          <ProjectTitle>Noughts And Crosses</ProjectTitle>
          <ProjectDescription>
            A fun front end Noughts and Crosses game where two players can play
            against each other or single player mode against a bot. Players can
            change names, customise X / O symbol and select a range of board
            sizes. The board sizes and winning sequences were calculated
            programmatically.
            <br></br>
            <br></br>
            Tech Stack: JavaScript, React
          </ProjectDescription>
        </IndividualProject>
        <IndividualProject>
          <ProjectTitle>Portfolio Site</ProjectTitle>
          <ProjectDescription>
            My Portfolio page showcasing my projects and skills. The page allows
            viewers to switch between two colour schemes.
            <br></br>
            <br></br>
            Tech Stack: React, React Styled Components, Reach Router and
            HTML/CSS.
          </ProjectDescription>
        </IndividualProject>
      </ProjectsContainer>
    </StyledMain>
  );
};

export default Projects;
