import React from "react";
import styled from "styled-components";
import { device } from "../break-points/device-Sizes";
// const SwitchBoxWrapper = styled.div`
//   /* border: 1px solid white; */
//   position: relative;
//   text-align: center;
//   width: 5vw;
//   padding-top: 20px;

//   /* height: 100%; */
//   /* margin-top: 20px; */
//   @media ${device.mobileS} {
//     width: 20vw;
//     /* border: 1px solid red; */
//     /* overflow: hidden; */
//   }
// `;

const SwitchBoxLabel = styled.label`
  position: fixed;
  /* top: 0;
left: 0; */
  width: 42px;
  height: 20px;
  border-radius: 15px;
  background: #38bacb;
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
  @media ${device.mobileS} {
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
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

const Switch = (props) => {
  const { handleClick } = props;
  return (
    <>
      <SwitchBox id="checkbox" type="checkbox" onClick={handleClick} />
      <SwitchBoxLabel htmlFor="checkbox" />
    </>
  );
};

export default Switch;
