import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./calendar.css"; 

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [clickedDate, setClickedDate] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const nowYear = date.getFullYear();
  let nowMon = date.getMonth() + 1;

  const bfBtn = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
    setClickedDate(null);
    const admindate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}`;
    localStorage.setItem("admindate", admindate);
  };

  const atBtn = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
    setClickedDate(null);
    const admindate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}`;
    localStorage.setItem("admindate", admindate);
  };

  const handleDateClick = (day, event) => {
    const button = event.target;
    const clickedDateString = `${nowYear}-${nowMon}-${day}`;
  
    navigate(`?date=${clickedDateString}`);
    setClickedDate(clickedDateString);
    button.classList.add("clicked");
  
    const buttons = document.querySelectorAll("button");
    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("clicked");
      }
    });
  
    localStorage.setItem("admindate", clickedDateString);
  };
  const applyStylesToClickedDate = () => {
    if (clickedDate) {
      const [clickedYear, clickedMonth, clickedDay] = clickedDate.split("-");
      const clickedDayInt = parseInt(clickedDay, 10);

      if (
        clickedYear === nowYear.toString() &&
        clickedMonth === (nowMon < 10 ? `0${nowMon}` : nowMon.toString())
      ) {
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
          const day = parseInt(button.textContent, 10);
          if (day === clickedDayInt) {
            button.classList.add("button-clicked");
          } else {
            button.classList.remove("button-clicked");
          }
        });
      }
    }
  };

  useEffect(() => {
    applyStylesToClickedDate();
  }, [date]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const clickedDateString = queryParams.get("date");
    setClickedDate(clickedDateString);
    localStorage.setItem("admindate", clickedDateString);
  }, [location.search]);

  const renderCalendar = () => {
    const daysInMonth = new Date(nowYear, nowMon, 0).getDate();
    const firstDay = new Date(nowYear, nowMon - 1, 1).getDay();

    const calendarRows = [];
    let calendarRow = [];

    for (let i = 0; i < firstDay; i++) {
      calendarRow.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarRow.push(
        <td key={day}>
          <button onClick={(event) => handleDateClick(day, event)}>
            {day}
          </button>
        </td>
      );

      if ((firstDay + day - 1) % 7 === 6) {
        calendarRows.push(<tr key={calendarRows.length}>{calendarRow}</tr>);
        calendarRow = [];
      }
    }

    if (calendarRow.length > 0) {
      calendarRows.push(<tr key={calendarRows.length}>{calendarRow}</tr>);
    }

    return calendarRows;
  };

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0089ff;
    border: none;
    font-size: 20px;
    padding: 15px;
  `;

  return (
    <div>
      <Container>
        <div id="btn">
          <input type="button" onClick={bfBtn} value="<" />
        </div>
        <caption>{`${nowYear}년 ${nowMon}월`}</caption>
        <div id="btn">
          <input type="button" onClick={atBtn} value=">" />
        </div>
      </Container>
      <table>
        <thead>
          <tr>
            <th>SUN</th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THU</th>
            <th>FRI</th>
            <th>SAT</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
