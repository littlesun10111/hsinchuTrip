import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
const Footer = () => {
  return (
    <Col sm={12}>
      <StyledFooter>
        <i className="ri-copyright-line"></i>
        <p className="mb-0">2021 littlesun all rights resverved</p>
      </StyledFooter>
    </Col>
  );
};
const StyledFooter = styled.div`
  background: #539447;
  color: #e8e8e8;
  padding: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Footer;
