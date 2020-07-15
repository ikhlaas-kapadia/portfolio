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
  font-family: "roboto";

  @media only screen and (min-width: 615px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
const IndividualProject = styled.article`
  position: relative;
  width: 90%;
  height: 100%;
  min-height: 575px;
  max-height: 575px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.textBackground};
  background-size: cover;
  color: ${(props) => props.theme.color};
  box-shadow: 1px 1px 2.5px 2.1px ${(props) => props.theme.border};
  border-radius: 20px;
  margin: 15px;
  @media only screen and (min-width: 411px) {
    min-height: 530px;
    max-height: 530px;
  }
  @media only screen and (min-width: 535px) {
    min-height: 510px;
    max-height: 510px;
  }
  @media only screen and (min-width: 591px) {
    min-height: 480px;
    max-height: 480px;
  }
  @media only screen and (min-width: 643px) {
    min-height: 430px;
    max-height: 430px;
  }
  @media ${device.tablet} {
    min-height: 100px;
    height: 300px;
    max-height: 330px;
  }
  @media only screen and (min-width: 902px) {
    width: 85%;
  }
  @media ${device.laptopL} {
    width: 65%;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const StyledSection = styled.section`
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-height: 100%;
    margin: 0;
  }
  @media ${device.desktopL} {
    width: 99%;
    height: 65%;
  }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  width: 85%;
  height: 100%;
  min-height: 200px;
  background-image: ${(props) => `url${props.image}`};
  background-repeat: no-repeat;
  background-size: cover;
  @media ${device.tablet} {
    min-height: none;
    height: 120%;
    width: 30%;
    margin-left: 15px;
  }
  @media ${device.desktopL} {
    width: 20%;
  }
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  font-weight: regular;
  text-align: center;
  line-height: 1.2rem;
  width: 85%;
  > p {
    margin-bottom: 15px;
  }
  @media ${device.mobileL} {
    text-align: justify;
  }
  @media ${device.tablet} {
    width: calc(100% - 30% - 15px);
    > p {
      width: 90%;
      margin: 15px auto;
    }
  }
  @media ${device.desktopL} {
    width: 90%;
    max-width: 90%;
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  text-decoration: underline;
  font-weight: 600;
  text-align: left;
`;

const LinksContainer = styled.div`
  position: absolute;
  display: flex;
  width: 90%;
  bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    align-self: flex-end;
    position: static;
    width: 65%;
    max-height: 100%;
    flex-wrap: nowrap;
  }
  @media ${device.desktopL} {
    width: 90%;
  }
`;

const LinkBox = styled.a`
  display: block;
  border: 1px solid black;
  width: 100px;
  height: 25px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.65rem;
  font-weight: 600;
  background-color: #e2fdff;
  color: #030303;
  margin: 2%;

  &&:hover {
    transform: scale(1.05);
    cursor: pointer;
    opacity: 0.95;
  }
`;
const LinkText = styled.span`
  /* border: 1px solid red; */
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  height: 100%;
  width: 100%;
`;

const Projects = (props) => {
  const { theme } = props;
  return (
    <StyledMain theme={theme}>
      <StyledHeading>Projects</StyledHeading>
      <ProjectsContainer>
        <IndividualProject theme={theme}>
          <ProjectTitle>NC News</ProjectTitle>
          <StyledSection>
            <ImageContainer image={"(" + ncImage + ")"}></ImageContainer>
            <DescriptionContainer>
              <p>
                A full stack Reddit style web application where users can view
                articles, filter articles by topic and other criteria. Articles
                are served through a RESTful API server created using MVC
                framework and utilising TDD.
              </p>
              <p>
                <StyledSpan>Tech Stack:</StyledSpan> JavaScript, React,
                PostgreSQL, Knex, Axios, Express, Node JS, Reach Router, Moment,
                Chai, Supertest.
              </p>
            </DescriptionContainer>
          </StyledSection>
          <LinksContainer>
            <LinkBox
              href="https://ikhlaas-nc-news.netlify.app/"
              target="_blank"
            >
              <LinkText>FE Site</LinkText>
            </LinkBox>
            <LinkBox
              href="https://github.com/ikhlaas-kapadia/nc-news"
              target="_blank"
            >
              <LinkText>FE Code</LinkText>
            </LinkBox>
            <LinkBox
              href="https://news-app-ikhlaas.herokuapp.com/api"
              target="_blank"
            >
              <LinkText>BE Site</LinkText>
            </LinkBox>
            <LinkBox
              href="https://github.com/ikhlaas-kapadia/nc_news_backend"
              target="_blank"
            >
              <LinkText>BE Code</LinkText>
            </LinkBox>
          </LinksContainer>
        </IndividualProject>
        <IndividualProject theme={theme}>
          <ProjectTitle>Hubert</ProjectTitle>
          <StyledSection>
            <ImageContainer image={"(" + hubertImage + ")"}></ImageContainer>
            <DescriptionContainer>
              <p>
                A full stack cross platform hide and seek game for mobile. Users
                can create an account, login and play with other players. The
                app uses live google map tracking enabling the hider to see the
                seeker in real time.
              </p>
              <p>
                <StyledSpan>Tech Stack:</StyledSpan> JavaScript, Flutter, Dart
                Socket.IO, Express JS, Node JS, MongoDB, Mongoose, BCrypt Hash,
                JWT.
              </p>
            </DescriptionContainer>
          </StyledSection>

          <LinksContainer>
            <LinkBox
              href="https://www.youtube.com/watch?v=wi_zpSYNBdw"
              target="_blank"
            >
              <LinkText>Demo Video</LinkText>
            </LinkBox>
            <LinkBox
              href="https://github.com/ikhlaas-kapadia/hide-and-seek"
              target="_blank"
            >
              <LinkText>FE Code</LinkText>
            </LinkBox>
            <LinkBox
              href="https://github.com/ikhlaas-kapadia/Hide-And-Seek-BE"
              target="_blank"
            >
              <LinkText>BE Code</LinkText>
            </LinkBox>
          </LinksContainer>
        </IndividualProject>
        <IndividualProject theme={theme}>
          <ProjectTitle>Noughts And Crosses</ProjectTitle>
          <StyledSection>
            <ImageContainer image={"(" + gameImage + ")"}></ImageContainer>
            <DescriptionContainer>
              <p>
                A fun Noughts and Crosses game where players can play against
                each other or against a bot. Players can change names, customise
                symbols and select a range of board sizes. The board sizes and
                winning sequences are calculated programmatically upon
                selection.
              </p>
              <p>
                <StyledSpan>Tech Stack:</StyledSpan> JavaScript, React
              </p>
            </DescriptionContainer>
          </StyledSection>
          <LinksContainer>
            <LinkBox href="https://ik-xo-game.netlify.app" target="_blank">
              <LinkText>Website</LinkText>
            </LinkBox>
            <LinkBox
              href="https://github.com/ikhlaas-kapadia/Noughts-And-Crosses"
              target="_blank"
            >
              <LinkText>Code</LinkText>
            </LinkBox>
          </LinksContainer>
        </IndividualProject>
      </ProjectsContainer>
    </StyledMain>
  );
};

export default Projects;
