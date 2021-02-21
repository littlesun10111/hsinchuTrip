import React from "react";
import { Modal } from "react-bootstrap";

const AddSuccess = ({ addScene, onHide }) => {
  return (
    <Modal show={addScene} onHide={onHide} centered>
      <Modal.Body className="d-flex align-items-center justify-content-center">
        <p className="mb-0">加入成功</p>
      </Modal.Body>
    </Modal>
  );
};
export default AddSuccess;
