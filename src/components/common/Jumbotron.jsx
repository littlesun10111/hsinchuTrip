import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import topBg from "../../assets/topBg.jpg";
import styled from "styled-components";
const JumbotronImg = () => {
  return (
    <StyledJumbotronBg fluid>
      <Container></Container>
    </StyledJumbotronBg>
  );
};
const StyledJumbotronBg = styled(Jumbotron)`
  background: url(${topBg});
  height: 250px;
  opacity: 0.8;
`;
export default JumbotronImg;
