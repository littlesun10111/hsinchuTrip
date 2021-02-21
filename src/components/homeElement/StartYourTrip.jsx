import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const StartYourTrip = () => {
  return (
    <Col sm={12}>
      <StyledFullScreenSection>
        <h3 className="mb-3">開始您的旅遊吧!</h3>
        <p className="mb-3">心動不如馬上行動，趕緊開始</p>
        <Link to="/schedulePlan/" className="btn btn-primary">
          規劃行程
        </Link>
      </StyledFullScreenSection>
    </Col>
  );
};

const StyledFullScreenSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default StartYourTrip;
