import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Top from "../top";
import Wave from "../Wave";


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 70vh; 
`;

const Text1 = styled.div`
  color: #0089ff;
  font-family: Nunito;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  text-align: center;
`;

const Text2 = styled.div`
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.25px;
  text-align: center;
`;
const Button = styled.button`
  width: 150px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #0089ff;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: bold;
  user-select: none;
  transition: background-color 0.2s ease-in-out;
  text-align: center;
  line-height: 50px;
  border: none;
  margin-top: 50px;
`;

const NotConfirm = ({ reservationInfo }) => {
  const navigate = useNavigate();
  const schoolNumber = localStorage.getItem("schoolnumber");
  const goToMain = () => {
    navigate(`/reservation/${schoolNumber}`); // 메인 페이지 경로로 이동
  };


  return (
    <div>
      <Top />
      <TextContainer>
        <Text1>예약 실패</Text1>
        <p />
          <>
            <Text2>이미 예약이 존재하거나 <br/>
              하루 2시간 이상의 예약은 제한됩니다.</Text2>
          </>
         
        <Button onClick={goToMain}>뒤로</Button>
      </TextContainer>
      <Wave />
    </div>
  );
};

export default NotConfirm;
