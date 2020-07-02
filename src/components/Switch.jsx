import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";

const SwitchBoxLabel = styled.label`
  align-self: center;
  position: absolute;
  z-index: 100;
  /* margin-top: 1000px; */
  margin-left: 50%;
  width: 42px;
  height: 20px;
  border-radius: 15px;
  background: #6eeeff;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 3px;
    background: black;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const SwitchBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  opacity: 0;
  z-index: 2;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  &:checked + ${SwitchBoxLabel} {
    background: #277a7d;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      background-color: white;
      width: 14px;
      height: 14px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
const SwitchContainer = styled.div`
  position: relative;
  width: 40vw;
  /* text-align: center; */
  display: flex;
  @media ${device.tablet} {
    width: 60vw;
  }
  @media ${device.laptop} {
    width: 25vw;
  }
`;

const Switch = (props) => {
  const { handleClick } = props;
  return (
    <SwitchContainer>
      <SwitchBox id="checkbox" type="checkbox" onClick={handleClick} />
      <SwitchBoxLabel htmlFor="checkbox" />
    </SwitchContainer>
  );
};

export default Switch;
