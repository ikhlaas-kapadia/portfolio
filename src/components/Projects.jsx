import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";
import { device } from "../break-points/device-Sizes";
import demo from "../images/nc.png";
import hubertImage from "../images/hubert.png";
import gameImage from "../images/game.png";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
  /* flex-wrap: wrap;  */
  @media only screen and (min-width: 615px) {
    flex-direction: row;
    /* align-items: space-between; */
    flex-wrap: wrap;
  }
`;

const IndividualProject = styled.article`
  /* position: relative; */
  width: 300px;
  height: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #dffbff;
  color: #0d0d0d;
  border: 1px solid black;
  border-radius: 20px;
  margin: 5px;
  @media only screen and (min-width: 615px) {
    width: 290px;
    max-height: 450px;
    min-height: 450px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 5%;
  text-align: center;
`;
const ProjectDescription = styled.p`
  padding: 3% 3% 0 3%;
  font-size: 0.7rem;
  font-weight: regular;
  text-align: justify;
  /* height: 10%; */
`;

const ProjectLinksContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  width: 98%;
  bottom: 5px;
  /* height: 10%; */
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 7%;
  @media only screen and (min-width: 615px) {
    /* flex-wrap: none; */
  }
`;

const ProjectLinkBox = styled.a`
  text-decoration: none;
  border: 1px solid black;
  min-width: 23%;
  height: 100%;
  padding: 1%;
  border-radius: 5px;
  font-size: 0.5rem;
  font-weight: 600;
  background-color: #ffffff;
  color: #030303;
  margin-bottom: 0.5%;

  &&:hover {
    transform: scale(1.05);
    cursor: pointer;
    opacity: 0.95;
  }
  @media only screen and (min-width: 615px) {
    font-size: 0.6rem;
    padding: 2%;
  }
  @media ${device.laptop} {
    font-size: 0.6rem;
    min-width: 23%;
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

const ImageContainer = styled.div`
  border: 1px solid red;
  max-width: 95%;
  min-height: 400px;

  @media ${device.tablet} {
    /* width: 500px;
    height: 200px; */
  }
`;
const ProjectImage = styled.img`
  filter: brightness(90%);
  object-fit: cover;
  object-position: 0 0;
  width: 95%;
  margin: 0 auto;
  height: 200px;
  background-color: black;
  border: 1px solid black;
`;

const Projects = () => {
  return (
    <StyledMain>
      <StyledHeading>Projects</StyledHeading>
      <ProjectsContainer>
        <IndividualProject>
          <ProjectTitle>NC News</ProjectTitle>
          <ProjectImage src={demo}></ProjectImage>
          <ProjectDescription>
            A full stack Reddit style web application. Allows visitors to view
            articles and filter by topic author and other criteria. The backend
            comprises of a RESTful API server created using TDD which serves
            articles by authors.
            <br />
            <br />
            <StyledSpan>Tech Stack:</StyledSpan> JavaScript, React, PostgreSQL,
            Knex, Axios, Express, Node JS, Reach Router, Moment.
          </ProjectDescription>

          <ProjectLinksContainer>
            <ProjectLinkBox
              href="https://ikhlaas-nc-news.netlify.app/"
              target="_blank"
            >
              <ProjectLinkText>Live Site </ProjectLinkText>
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
            <StyledSpan>Tech Stack:</StyledSpan> JavaScript, Flutter, Dart
            Socket.IO, Express JS, Node JS, MongoDB, Mongoose, BCrypt Hash, JWT.
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
            <StyledSpan>Tech Stack:</StyledSpan> JavaScript, React
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
