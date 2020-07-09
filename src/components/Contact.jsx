import React from "react";
import styled from "styled-components";
import { StyledMain, StyledHeading } from "./About";
import { device } from "../break-points/device-Sizes";
const FormContainer = styled.form`
  max-height: auto;
  width: 85vw;
  background-color: #dffbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  font-size: 0.75rem;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 0 auto;

  @media ${device.mobileL} {
    /* font-size: 1rem; */
    width: 65vw;
  }
  @media only screen and (min-width: 548px) {
    /* font-size: 1rem; */
    width: 60vw;
  }
  @media only screen and (min-width: 711px) {
    max-height: 550px;
    /* font-size: 1rem; */
    width: 50vw;
  }
  @media ${device.laptop} {
    width: 40vw;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

const InputContainer = styled.div`
  width: 90%;
  margin: 1%;
`;
const InputField = styled.input`
  outline: none;
  margin-top: 1%;
  width: 100%;
  padding: 0.3rem;
  border: "1px solid black";
  overflow: hidden;
`;
const MessageContainer = styled.div`
  box-sizing: border-box;
  height: 100px;
  width: 90%;
  /* border: 1px solid red; */
  margin: 1%;

  /* padding: 7px; */
`;
const ButtonContainer = styled.div`
  width: 90%;
  margin: 3%;
  text-align: center;
`;
const SubmitButton = styled.button`
  display: inline-block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 3%;
  border-radius: 20px;
  border: 1px solid black;
  transition: 0.3s ease-in-out;
  background-color: #c7f3f9;
  font-size: 0.75rem;

  &&:hover {
    background-color: #b0e9f1;
    cursor: pointer;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 0;
  @media only screen and (min-width: 1024px) {
    width: 65%;
    align-self: flex-start;
    margin-left: 25px;
  }
`;

const ContactInfo = styled.a`
  /* border: 1px solid red; */
  line-height: 0.4rem;
  display: block;
  margin: 1%;
  width: fit-content;
  font-size: 1.2rem;
  text-decoration: none;
  color: #030303;
  &&:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  > span {
    font-size: 0.7rem;
    padding-bottom: 50%;
    @media only screen and (min-width: 1024px) {
      font-size: 0.75rem;
    }
  }
`;

const ContactPage = (props) => {
  return (
    <StyledMain theme={props.theme} click={props.click}>
      <StyledHeading>Get in Touch</StyledHeading>
      <FormContainer
        action="mailto:ikhlaas.ka@gmail.com"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm"
      >
        <InputContainer>
          <label>
            First Name <br></br>
            <InputField type="text" name="First Name" />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Last Name
            <br></br>
            <InputField type="text" name="Last Name" />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Email
            <br></br>
            <InputField type="email" name="Email" required />
          </label>
        </InputContainer>
        <MessageContainer>
          <label>
            Message
            <br></br>
            <textarea
              type="text"
              name="message"
              style={{
                display: "inline-block",
                width: "100%",
                border: "1px solid black",
                padding: "3%",
                resize: "none",
                "margin-top": "1%",
                outline: "none",
                height: "100%",
              }}
            />
          </label>
        </MessageContainer>
        <ButtonContainer>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ButtonContainer>
        <ContactContainer>
          <ContactInfo
            href="https://linkedin.com/in/ikhlaas-kapadia"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
            <span> - www.linkedin.com/in/ikhlaas-kapadia</span>
          </ContactInfo>
          <ContactInfo
            href="https://github.com/ikhlaas-kapadia"
            target="_blank"
          >
            <i className="fab fa-github"></i>
            <span> - www.github.com/ikhlaas-kapadia</span>
          </ContactInfo>
          <ContactInfo href="mailto:ikhlaas.ka@gmail.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span> - ikhlaas.kapadia@gmail.com</span>
          </ContactInfo>
        </ContactContainer>
      </FormContainer>
    </StyledMain>
  );
};
export default ContactPage;
