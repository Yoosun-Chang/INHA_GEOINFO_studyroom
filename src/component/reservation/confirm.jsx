import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Top from "../top";
import Wave from "../Wave";
import axios from "axios";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 70vh; /* 뷰포트 높이를 100%로 설정하여 페이지 중앙에 위치하도록 합니다. */
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

const Confirm = ({ reservationInfo }) => {
  const navigate = useNavigate();
  const schoolNumber = localStorage.getItem("schoolnumber");
  // 예약 정보를 받아온다고 가정 (reservationInfo 객체에 예약자, 날짜, 시간 정보 포함)
  //const { name, date, time } = reservationInfo;

  // 메인 페이지로 이동하는 함수
  const goToMain = () => {
    navigate(`/reservation/${schoolNumber}`); // 메인 페이지 경로로 이동
  };
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {
    // schoolNumber가 있을 경우에만 API 요청
    if (schoolNumber) {
      // 예약 데이터를 가져오는 Axios 요청
      axios
        .get(`https://geostudyroom.store/myreservation/${schoolNumber}`)
        .then((response) => {
          const reservations = response.data;
          // 가져온 예약 데이터를 상태에 저장합니다.
          setReservationData(reservations);
        })
        .catch((error) => {
          console.error("예약 데이터를 가져오는 중 오류 발생:", error);
        });
    }
  }, []);

  return (
    <div>
      <Top />
      <TextContainer>
        <Text1>예약이 확정되었습니다!</Text1>
        <p />
        <Text2>
          {" "}
          예약자:{" "}
          {reservationData.user
            ? reservationData.user.schoolnumber
            : "데이터 없음"}{" "}
        </Text2>
        <Text2>날짜: {reservationData.date}</Text2>
        <Text2>시간: {reservationData.clock_times}</Text2>
        <Button onClick={goToMain}>뒤로</Button>
      </TextContainer>
      <Wave />
    </div>
  );
};

export default Confirm;
