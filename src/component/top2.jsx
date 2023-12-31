import React from "react";
import styled from "styled-components";
import TopImage from "./Top.jpg";
import { Link } from "react-router-dom";

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative; /* 부모 컨테이너를 기준으로 자식 요소를 배치하기 위해 relative 설정 */
  height: 10vh;
  max-height: 50px;
  width: 100vw;
  z-index: -10;
`;

const StyledLink = styled(Link)`
  font-family: "Nunito", sans-serif;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.05rem;
  position: absolute;
  color: #fff;
  left: 10px;
  background-color: transparent;
  text-decoration: none !important;
  cursor: pointer;
`;

function Top2() {
  const schoolNumber = localStorage.getItem("schoolnumber");
  return (
    <CenteredContainer>
      <ResponsiveImage src={TopImage} alt="Top Image" />
      <StyledLink to={`/reservation/${schoolNumber}`}>
        INHA UNIVERSITY
      </StyledLink>
    </CenteredContainer>
  );
}

export default Top2;
