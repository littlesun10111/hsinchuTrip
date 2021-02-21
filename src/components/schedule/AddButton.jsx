import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
const AddButton = ({ onShow }) => {
  return (
    <Col className="d-flex justify-content-center">
      <StyledAdd className="ri-add-circle-line" onClick={onShow}></StyledAdd>
    </Col>
  );
};
const StyledAdd = styled.i`
  font-size: 40px;
  cursor: pointer;
`;
export default AddButton;
