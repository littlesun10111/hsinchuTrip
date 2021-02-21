import React from "react";
import { Col } from "react-bootstrap";
const ScheduleAttractions = ({ title, location, period }) => {
  return (
    <div className="">
      <Col>
        <input type="text" value={title} />
        <input type="text" value={location} />
        {/* <span>{title}</span>
        <span>{location}</span> */}
      </Col>
      <Col>
        <label htmlFor="period">停留時間:</label>
        <input type="text" value={period} />
        {/* <span>停留時間:</span>
        <span>{period}</span> */}
      </Col>
      <Col>
        <i class="ri-arrow-up-s-fill"></i>
        <i class="ri-arrow-down-s-fill"></i>
      </Col>
    </div>
  );
};
export default ScheduleAttractions;
