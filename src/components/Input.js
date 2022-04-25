import React from "react";
import styled from "styled-components";
import { IoIosCheckmarkCircle, IoIosEye } from "react-icons/io";

const Input = () => {
  const [isCheck, setCheck] = React.useState(false);
  const [pwd, setPwd] = React.useState("password");

  const emailCheck = (e) => {
    if (e.target.value.includes("@")) {
      let email = e.target.value.split("@");
      if (
        email.length === 2 &&
        email[0].length !== 0 &&
        email[1].includes(".")
      ) {
        setCheck(true);
      } else setCheck(false);
    } else setCheck(false);
  };

  const changePwd = () => {
    if (pwd === "password") {
      setPwd("text");
    } else setPwd("password");
  };

  return (
    <React.Fragment>
      <Title>Input.js - 난이도 4 ~ 12</Title>
      <Email>
        <p>E-mail</p>
        <div>
          <input placeholder="E-mail" onChange={emailCheck} />
          <IoIosCheckmarkCircle
            className="checkmarkIcon"
            style={{ color: isCheck ? "#268CAA" : "#97afb9" }}
          />
        </div>
      </Email>
      <Password>
        <p>Password</p>
        <div>
          <input placeholder="Password" type={pwd} />
          <IoIosEye
            className="eyeIcon"
            onClick={changePwd}
            style={{
              cursor: "pointer",
              color: pwd === "password" ? "#97afb9" : "#268CAA",
            }}
          />
        </div>
      </Password>
    </React.Fragment>
  );
};

const Title = styled.h4`
  color: #344a53;
  margin-top: 50px;
`;

const Email = styled.div`
  position: relative;
  p {
    margin: 2px 0px;
    font-size: small;
  }

  div {
    width: 300px;
    height: 50px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #97afb9;
    border-radius: 3px;

    input,
    input:focus {
      border: none;
      outline: none;
      font-size: 15px;
    }

    .checkmarkIcon {
      font-size: 20px;
      color: #97afb9;
    }

    div:focus {
      outline: 1px solid black;
      border-radius: 3px;
    }
  }
`;

const Password = styled(Email)`
  margin-top: 20px;

  .eyeIcon {
    font-size: 20px;
    color: #97afb9;
  }
`;

export default Input;
