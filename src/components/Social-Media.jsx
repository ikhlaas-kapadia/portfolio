import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
const SocialMediaBox = styled.div`
  /* border: 1px solid green; */
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${device.mobileS} {
    width: 55vw;
    /* border: 1px solid red; */
    /* overflow: hidden; */
  }
`;
const SocialMediaIcon = styled.a`
  /* border: 1px solid yellow; */
  padding: 8px;
  font-size: 2rem;
  transition: all 250ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: #2682a8;
    transform: scale(1.3);
  }
  @media ${device.mobileS} {
    font-size: 1.8rem;
  }
`;

const SocialMedia = () => {
  return (
    <SocialMediaBox>
      <SocialMediaIcon>
        <i className="fab fa-linkedin"></i>
      </SocialMediaIcon>
      <SocialMediaIcon>
        <i className="fab fa-github"></i>
      </SocialMediaIcon>
    </SocialMediaBox>
  );
};

export default SocialMedia;
