import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Dropdown = () => {
  const playList = [
    { name: "검정색하트" },
    { name: "긴 꿈" },
    { name: "불면" },
    { name: "바래다줄게" },
    { name: "폭발하기5초전" },
    { name: "널만나러가는길이야" },
    { name: "머리에서 발끝까지" },
  ];

  const [isActive, setActive] = React.useState(false);
  const [keyWord, setKeyWord] = React.useState("");
  const [search, setSearch] = React.useState("");

  const clickedBtn = () => {
    setActive(!isActive);
    setSearch("");
  };

  return (
    <React.Fragment>
      <Title>Dropdown.js - 난이도 8 ~ 12</Title>
      <Container>
        <Button onClick={clickedBtn}>
          <p>{keyWord ? keyWord : "PLAYLIST"}</p>
          {isActive ? (
            <IoMdArrowDropup className="Icon" />
          ) : (
            <IoMdArrowDropdown className="Icon" />
          )}
        </Button>
        {isActive ? (
          <SelectList>
            <input
              placeholder="검색어를 입력하세요"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {playList
              .filter((k) => {
                if (search === "") {
                  return k;
                } else if (k.name.includes(search)) {
                  return k;
                }
              })
              .map((k, i) => {
                return (
                  <div
                    onClick={() => {
                      setKeyWord(k.name);
                      setActive(false);
                    }}
                  >
                    {k.name}
                  </div>
                );
              })}
          </SelectList>
        ) : null}
      </Container>
    </React.Fragment>
  );
};

const Title = styled.h4`
  color: #344a53;
  margin-top: 50px;
`;

const Container = styled.div`
  position: relative;
`;

const Button = styled.div`
  width: 300px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #97afb9;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  .Icon {
    font-size: 20px;
  }
`;
const SelectList = styled.div`
  position: absolute;
  width: 300px;
  margin-bottom: 50px;
  box-sizing: border-box;
  border: 1px solid #97afb9;
  border-radius: 3px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input,
  input:focus {
    height: 40px;
    padding: 0px 10px;
    border: none;
    outline: none;
    font-size: 15px;
  }

  div {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0px 10px;
  }
`;

export default Dropdown;
