import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
const AddSchedule = ({ show, onClose, onAdd }) => {
  const defaultPlan = { planName: "", days: 0 };
  const [newPlan, setNewPlan] = useState(defaultPlan);

  const handleAdd = () => {
    onAdd && onAdd(newPlan);
    setNewPlan(defaultPlan);
  };
  const handleMinus = () => {
    setNewPlan({ ...newPlan, days: newPlan.days - 1 });
  };
  const handlePlus = () => {
    setNewPlan({ ...newPlan, days: newPlan.days + 1 });
  };
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>建立行程</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="3">
              行程名稱：
            </Form.Label>
            <Col sm="9">
              <Form.Control
                defaultValue="請輸入行程名稱"
                onChange={(e) => {
                  setNewPlan({ ...newPlan, planName: e.target.value });
                }}
                value={newPlan.planName}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="">
            <Form.Label column sm="3">
              行程時數：
            </Form.Label>
            <Col sm="9">
              <Button
                onClick={handleMinus}
                disabled={newPlan.days === 0 ? true : false}
              >
                -
              </Button>
              <span className="mx-3">{newPlan.days}</span>
              <Button onClick={handlePlus}>+</Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddSchedule;
