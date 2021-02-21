import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import OpeningBgImg from "../../assets/pexels-how-far-from-home-6788862.jpg";
const StyledViewSection = styled.section`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const OpeningText = () => {
  return (
    <Col
      sm={{ span: 8, offset: 2 }}
      md={{ span: 6, offset: 3 }}
      className="d-flex justify-content-center align-items-center"
    >
      <StyledViewSection>
        <h3>您可以在這裡找到屬於自己的樂趣!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nulla
          reiciendis! Molestias neque enim voluptatum, fuga culpa nemo earum
          natus assumenda eveniet asperiores magni cupiditate, voluptas pariatur
          hic sequi possimus?
        </p>
      </StyledViewSection>
    </Col>
  );
};
export default OpeningText;
