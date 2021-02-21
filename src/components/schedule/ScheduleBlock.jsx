import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const ScheduleBlock = ({ time, scheduleName, period, onDelete }) => {
  let { url } = useRouteMatch();
  const handleDelete = () => {
    alert("確定刪除行程?");
    onDelete && onDelete();
  };
  return (
    <div className="d-flex justify-content-between border border-2 rounded mb-3">
      <Col className="date py-3 d-flex justify-content-start align-items-center">
        <span className="d-block">建立日期：</span>
        <span className="d-block">{time}</span>
      </Col>
      <Col className="schedule-name py-3 d-flex justify-content-start align-items-center">
        <span className="d-block">行程名稱：{scheduleName}</span>
      </Col>
      <Col className="period py-3 d-flex justify-content-start align-items-center">
        <span className="d-block">{period}天</span>
      </Col>
      <Col className="edit-group py-3 d-flex justify-content-end align-items-center">
        <StyledIcon
          className="ri-delete-bin-6-line mr-3"
          onClick={handleDelete}
        ></StyledIcon>
        <StyledLink to="/schedulePlan/editing">
          <StyledIcon className="ri-edit-2-fill"></StyledIcon>
        </StyledLink>
      </Col>
    </div>
  );
};

const StyledIcon = styled.i`
  font-size: 1.5rem;
  display: block;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;
export default ScheduleBlock;
