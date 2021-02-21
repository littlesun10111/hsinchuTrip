import React from "react";
import { Modal } from "react-bootstrap";
const PleaseWait = ({ onWait, onHide }) => {
  return (
    <Modal show={onWait} onHide={onHide} centered>
      <Modal.Body className="d-flex align-items-center justify-content-center">
        <p className="mb-0">頁面製作中...</p>
      </Modal.Body>
    </Modal>
  );
};
export default PleaseWait;
