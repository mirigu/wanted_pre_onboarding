import React from "react";
import styled from "styled-components";

const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Title>Toggle.js - 난이도3</Title>
      <ToggleContainer>
        <ToggleBtn className={toggle}></ToggleBtn>
        <p onClick={clickedToggle}>기본</p>
        <p onClick={clickedToggle}>상세</p>
      </ToggleContainer>
    </React.Fragment>
  );
};

const Title = styled.h4`
  color: #344a53;
`;

const ToggleContainer = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
  background-color: #d9f2fd;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    z-index: 10;
    width: 100%;
    height: 100%;
    font-weight: 500;
    color: #268caa;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    cursor: pointer;
  }

  .true {
    transform: translate(145px);
  }
`;

const ToggleBtn = styled.div`
  left: 0;
  position: absolute;
  width: 150px;
  height: 35px;
  margin: 0 2px;
  background-color: white;
  border-radius: 30px;
  transition: 0.5s;
`;

export default Toggle;
