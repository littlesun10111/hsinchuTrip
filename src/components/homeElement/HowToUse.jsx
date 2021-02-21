import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
const HowToUse = () => {
  return (
    <Col md={{ span: 8, offset: 2 }}>
      <StyledFullScreenSection>
        <StyledCenterCol md={{ span: 10, offset: 1 }}>
          <h3>簡易的步驟完成安排，隨時出遊沒煩惱</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            odio commodi sunt maxime harum distinctio consequatur alias
            perferendis saepe, a cum minima, expedita dolorem doloribus.
            Blanditiis unde accusamus dicta enim!
          </p>
          <video
            title="我是一個簡易教學"
            className="mb-4"
            controls
            width="75%"
            src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4"
          ></video>
        </StyledCenterCol>
      </StyledFullScreenSection>
    </Col>
  );
};
const StyledFullScreenSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledCenterCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default HowToUse;
