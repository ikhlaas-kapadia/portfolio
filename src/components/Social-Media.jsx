import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
const SocialMediaBox = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  @media ${device.laptop} {
    width: 40%;
  }
`;
const SocialMediaIcon = styled.a`
  text-decoration: none;
  color: #ffff;
  padding: 8px;
  font-size: 1.5rem;
  transition: all 250ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: #d1f9ff;
    transform: scale(1.2);
  }

  @media ${device.laptop} {
    font-size: 1.7rem;
  }
`;

const SocialMedia = () => {
  return (
    <SocialMediaBox>
      <SocialMediaIcon
        href="https://linkedin.com/in/ikhlaas-kapadia"
        target="_blank"
      >
        <i className="fab fa-linkedin"></i>
      </SocialMediaIcon>
      <SocialMediaIcon
        href="https://github.com/ikhlaas-kapadia"
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </SocialMediaIcon>
    </SocialMediaBox>
  );
};

export default SocialMedia;
