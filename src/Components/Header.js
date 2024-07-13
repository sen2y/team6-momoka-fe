// Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import jejuImage from "../Uploads/jejudog.jpeg"; // 이미지 경로를 설정

const Header = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/"); // MainPage로 경로 설정
  };

  return (
    <HeaderContainer>
      <Circle />
      <Title onClick={handleTitleClick}>뭐먹으카</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 304px; /* 너비를 304px로 설정 */
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 16px; /* padding-left를 그대로 유지 */
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eeeef0;
  border-radius: 50%;
  margin-right: 10px;
  background-image: url(${jejuImage});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold; /* 글씨 굵게 */
  margin: 0;
  cursor: pointer; /* 클릭 가능한 커서 표시 */
`;

export default Header;
