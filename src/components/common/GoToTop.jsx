import React from "react";
import styled from "styled-components";
const GoToTop = () => {
  return (
    <StyledLink className="top rounded-circle shadow" href="#top">
      <StyledIcon className="material-icons d-block">
        vertical_align_top
      </StyledIcon>
    </StyledLink>
  );
};
const StyledLink = styled.a`
  width: 48px;
  height: 48px;
  display: block;
  padding: 8px;
  margin-bottom: 20px;
  background: #539447;

  &:hover {
    text-decoration: none;
    position: relative;
    animation-name: up;
    animation-duration: 0.8s;
    animation-iteration-count: 2;
    @keyframes up {
      0% {
        top: 0px;
      }
      50% {
        top: 10px;
      }
      100% {
        top: 0px;
      }
    }
  }
`;
const StyledIcon = styled.span`
  font-size: 2rem;
  color: #fff8d3;
`;
export default GoToTop;
