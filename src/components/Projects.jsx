import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";
import { device } from "../break-points/device-Sizes";
import ncImage from "../assets/images/nc.png";
import hubertImage from "../assets/images/hubert.png";
import gameImage from "../assets/images/game.png";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;

  @media only screen and (min-width: 615px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const IndividualProject = styled.article`
  position: relative;
  width: 270px;
  height: 100%;
  min-height: 410px;
  max-height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.textBackground};
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 20px;
  margin: 5px;
  @media only screen and (min-width: 615px) {
    width: 300px;
    max-height: 450px;
    min-height: 450px;
    margin: 15px;
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
  @media ${device.tablet} {
    font-size: 0.75rem;
  }
`;

const ProjectLinksContainer = styled.div`
  position: absolute;
  display: flex;
  width: 98%;
  bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
`;

const StyledSpan = styled.span`
  text-decoration: underline;
  font-weight: 600;
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

const Projects = (props) => {
  const { theme } = props;
  return (
    <StyledMain theme={theme}>
      <StyledHeading>Projects</StyledHeading>
      <ProjectsContainer>
        <IndividualProject theme={theme}>
          <ProjectTitle>NC News</ProjectTitle>
          <ProjectImage src={ncImage}></ProjectImage>
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
        <IndividualProject theme={theme}>
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

        <IndividualProject theme={theme}>
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
