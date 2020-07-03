import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";
import { device } from "../break-points/device-Sizes";

import demo from "../videos/demo1.mp4";
import hubertImage from "../images/hubert.jpg";
import gameImage from "../images/game.jpg";

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
  position: relative;
  width: 90%;
  min-height: 430px;
  max-height: 430px;
  height: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dffbff;
  color: #0d0d0d;
  border: 1px solid black;
  border-radius: 5%;
  margin: 2% auto;
  @media ${device.tablet} {
    width: 80%;
    min-height: 700px;
    max-height: none; 
  }
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
  @media ${device.tablet} {
    font-size: 1.1rem;
  }
`;
const TechDescription = styled.p`
  /* padding: 3% 3% 0 3%; */
  font-size: 0.8rem;
  font-weight: regular;
  text-align: left;
  height: 30%;
  @media ${device.tablet} {
    font-size: 1.1rem;
  }
`;

const ProjectLinksContainer = styled.div`
  position: absolute;
  /* border: 1px solid red; */
  display: flex;
  width: 90%;
  bottom: 3px;
  min-height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* margin-top: 15%; */
  /* margin-bottom: 5%; */
`;

const ProjectLinkBox = styled.a`
  text-decoration: none;
  border: 1px solid black;
  min-width: 30%;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  background-color: #030303de;
  color: #ffffff;
  margin: 1%;

  &&:hover {
    transform: scale(1.1);
    cursor: pointer;
    opacity: 0.75;
  }
  @media ${device.tablet} {
    font-size: 1rem;
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
const ProjectImage = styled.img`
  display: inline-block;
  object-fit: fill;
  /* border: 1px solid red; */
  max-height: 150px;
  width: 30%;
  margin: 0 auto;
  background-color: black;
  border: 1px solid black;
  @media ${device.tablet} {
    max-height: 350px;
    width: 30%;
  }
`;
const ProjectVideo = styled.video`
  /* border: 1px solid red; */
  min-height: 20%;
  object-fit: fill;
  /* height: 60%; */
  width: 95%;
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
            <TechDescription>
              <StyledSpan>Tech Stack:</StyledSpan> JavaScript, React,
              PostgreSQL, Knex, Axios, Express, Node JS, Reach Router, Moment.
            </TechDescription>
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
          <ProjectImage src={hubertImage}></ProjectImage>
          <ProjectDescription>
            A full stack cross platform hide and seek game for mobile. Users can
            create an account, create a lobby and play with other players. The
            app uses live google map tracking enabling the hider to see the
            seeker in real time.
            <br></br>
            <br></br>
            <TechDescription>
              <StyledSpan>Tech Stack:</StyledSpan> JavaScript, Flutter, Dart
              Socket.IO, Express JS, Node JS, MongoDB, Mongoose, BCrypt Hash,
              JWT.
            </TechDescription>
          </ProjectDescription>
          <ProjectLinksContainer>
            <ProjectLinkBox
              href="https://www.youtube.com/watch?v=wi_zpSYNBdw"
              target="_blank"
            >
              <ProjectLinkText>Demo Video</ProjectLinkText>
            </ProjectLinkBox>
            <ProjectLinkBox
              href="https://github.com/ikhlaas-kapadia/hide-and-seek"
              target="_blank"
            >
              <ProjectLinkText>FE Code</ProjectLinkText>
            </ProjectLinkBox>
            <ProjectLinkBox
              href="https://github.com/NC-project-team-2020/BE-hide-and-seek"
              target="_blank"
            >
              <ProjectLinkText>BE Code</ProjectLinkText>
            </ProjectLinkBox>
          </ProjectLinksContainer>
        </IndividualProject>

        <IndividualProject>
          <ProjectTitle>Noughts And Crosses</ProjectTitle>
          <ProjectImage src={gameImage}></ProjectImage>
          <ProjectDescription>
            A fun Noughts and Crosses game where two players can play against
            each other or a single player against a bot. Players can change
            names, customise X / O symbols and select a range of board sizes.
            The board sizes and winning sequences are calculated
            programmatically upon selection.
            <br></br>
            <br></br>
            <TechDescription>
              <StyledSpan>Tech Stack:</StyledSpan> JavaScript, React
            </TechDescription>
          </ProjectDescription>
          <ProjectLinksContainer>
            <ProjectLinkBox href="#" target="_blank">
              <ProjectLinkText>Live Site</ProjectLinkText>
            </ProjectLinkBox>
            <ProjectLinkBox
              href="https://github.com/ikhlaas-kapadia/Noughts-And-Crosses"
              target="_blank"
            >
              <ProjectLinkText>Code</ProjectLinkText>
            </ProjectLinkBox>
          </ProjectLinksContainer>
        </IndividualProject>
      </ProjectsContainer>
    </StyledMain>
  );
};

export default Projects;
