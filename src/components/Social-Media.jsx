import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
const SocialMediaBox = styled.div`
  /* border: 1px solid green; */
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  @media ${device.tablet} {
    width: 30vw;
  }
  @media ${device.laptop} {
    width: 30vw;
  }
`;
const SocialMediaIcon = styled.a`
  /* border: 1px solid yellow; */
  padding: 8px;
  font-size: 1.9rem;
  transition: all 250ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: #2682a8;
    transform: scale(1.3);
  }

  @media ${device.mobileM} {
    font-size: 2rem;
  }
  @media ${device.tablet} {
    font-size: 1.5rem;
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
