import React from "react";
import { Button } from "react-bootstrap";
const NothingPlan = ({ onShow }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "30vh" }}
    >
      <div className="no-plan d-flex flex-column align-items-center">
        <p className="text-secondary">尚未開始建立行程</p>
        <Button variant="primary" onClick={onShow}>
          建立新行程
        </Button>
      </div>
    </div>
  );
};
export default NothingPlan;
