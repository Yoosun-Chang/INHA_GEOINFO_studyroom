import React from "react";
import Top2 from "../component/top2";
import List from "../component/myreservation/list";
import Wave from "../component/Wave";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const WaveContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end; /* Wave 컴포넌트를 오른쪽에 정렬합니다. */
  align-items: flex-end; /* Wave 컴포넌트를 아래에 정렬합니다. */
  position: relative; /* 위치를 상대적으로 설정합니다. */
`;

function Myreservation() {
  return (
    <Container>
      <Top2 />
      <List />
      <WaveContainer>
        <Wave />
      </WaveContainer>
    </Container>
  );
}

export default Myreservation;