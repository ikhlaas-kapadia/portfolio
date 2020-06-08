import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";

const ProjectsContainer = styled.main`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const IndividualProject = styled.article`
  display: flex;
  flex-direction: column;
  width: 40%;
  border: 1px solid green;
  margin: 1rem;
  padding: 1rem;
  min-width: 300px;
  max-width: 350px;
  min-height: 400px;
  background-color: #b3b3b31c;
  color: #0d0d0d;
  border: 2px solid black;
  border-radius: 5%;
`;

const ProjectDescription = styled.p`
  /* border: 1px solid red; */
  font-size: 1rem;
  font-weight: regular;
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: flex-end;
  border: 1px solid red;
  height: 100%;
`;

const ProjectTitle = styled.h2`
  /* border: 1px solid red; */
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const ProjectGif = styled.img``;

const Button = styled.a``;

const Projects = () => {
  return (
    <StyledMain>
      <StyledHeading>Projects</StyledHeading>
      <ProjectsContainer>
        <IndividualProject>
          <ProjectTitle>NC News</ProjectTitle>
          <ProjectGif></ProjectGif>
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
        </IndividualProject>
        <IndividualProject>
          <ProjectTitle>Hubert</ProjectTitle>
          <ProjectGif></ProjectGif>
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
          <ProjectGif></ProjectGif>
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
          <ProjectGif></ProjectGif>
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
          <ProjectGif></ProjectGif>
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
