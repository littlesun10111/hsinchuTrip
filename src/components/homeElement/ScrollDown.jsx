import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const ScrollDown = () => {
  return (
    <Col sm={{ span: 4, offset: 4 }}>
      <StyledScrollAnimation>
        <StyledP className="mb-0">SCROLL DOWN</StyledP>
        <span className="material-icons">keyboard_arrow_down</span>
      </StyledScrollAnimation>
    </Col>
  );
};

const StyledP = styled.p`
  font-size: 14px;
`;

const StyledScrollAnimation = styled.div`
  height: 15vh;
  color: #539447;
  cursor: pointer;
  position: relative;
  animation-name: scroll;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  @keyframes scroll {
    0% {
      color: #539447;
      top: 0px;
    }
    50% {
      color: #ad0030;
      top: 20px;
    }
    100% {
      color: #539447;
      top: 0px;
    }
  }
`;
export default ScrollDown;
