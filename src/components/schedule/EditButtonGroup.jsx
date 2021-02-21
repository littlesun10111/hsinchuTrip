import React from "react";
import styled from "styled-components";
import { Button, Col } from "react-bootstrap";
const EditButtonGroup = ({ onSave, onDelete, onPrint }) => {
  return (
    <StyledCol md={{ span: 3, offset: 6 }}>
      <Button
        variant="secondary"
        className="mr-3"
        onClick={onPrint && onPrint()}
      >
        &nbsp;&nbsp;<i className="ri-printer-line"></i>&nbsp;&nbsp;
      </Button>
      <Button
        variant="warning"
        className="mr-3"
        onClick={onDelete && onDelete()}
      >
        刪除
      </Button>
      <Button variant="success" onClick={onSave && onSave()}>
        保存
      </Button>
    </StyledCol>
  );
};
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export default EditButtonGroup;
