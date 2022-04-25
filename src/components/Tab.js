import React from "react";
import styled from "styled-components";

const Tab = () => {
  const [currentTab, setCurrentTab] = React.useState("tap1");

  return (
    <React.Fragment>
      <Title>Tab.js - 난이도 4</Title>
      <TabContainer>
        <TapLine className={currentTab}></TapLine>
        <div
          onClick={() => {
            setCurrentTab("tap1");
          }}
        >
          감자
        </div>
        <div
          onClick={() => {
            setCurrentTab("tap2");
          }}
        >
          고구마
        </div>
        <div
          onClick={() => {
            setCurrentTab("tap3");
          }}
        >
          카레라이스
        </div>
      </TabContainer>
    </React.Fragment>
  );
};

const Title = styled.h4`
  color: #344a53;
  margin-top: 50px;
`;

const TabContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 50px;
  border-bottom: 2px solid #eee;

  div {
    width: calc(400px / 3);
    transition: 0.3s;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }

  .tap2 {
    transform: translatex(calc(400px / 3));
  }

  .tap3 {
    transform: translatex(calc(400px / 3 * 2));
  }
`;

const TapLine = styled.div`
  position: absolute;
  bottom: -2px;
  width: calc(400px / 3);
  border-bottom: 3px solid #00a5e5;
`;

export default Tab;
