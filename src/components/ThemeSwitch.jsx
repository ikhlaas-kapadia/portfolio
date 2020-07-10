import React from "react";
import styled from "styled-components";
import styles from "./Switch.module.css";

const SwitchWrapper = styled.div`
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: center;
`;
const ThemeSwitch = (props) => (
  <SwitchWrapper>
    <label className={styles.switch}>
      <input onClick={props.handleClick} type="checkbox"></input>
      <span className={styles.slider}></span>
    </label>
  </SwitchWrapper>
);

export default ThemeSwitch;
