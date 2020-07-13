

import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";
import { device } from "../break-points/device-Sizes";
import ncImage from "../assets/images/nc.png";
import hubertImage from "../assets/images/hubert.png";
import gameImage from "../assets/images/game.png";




const DescriptionContainer = styled.div`
  margin: 0 auto;
  /* border: 1px solid red; */
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  font-weight: regular;
  text-align: center;
  line-height: 1.2rem;
  width: 85%;
  /* height: 10%; */
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
`;
