import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
const SocialMediaBox = styled.div`
  /* border: 1px solid green; */
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;
const SocialMediaIcon = styled.a`
  /* border: 1px solid yellow; */
  padding: 8px;
  font-size: 1.7rem;
  transition: all 250ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: #2682a8;
    transform: scale(1.3);
  }
  /* @media ${device.mobileS} {
    font-size: 1.8rem;
  }
  @media ${device.mobileM} {
    font-size: 2.4rem;
  }
  @media ${device.tablet} {
    font-size: 3rem;
    padding: 20px;
  } */
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
