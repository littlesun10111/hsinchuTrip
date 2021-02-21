import React, { useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import styled from "styled-components";
import { Link, Route, useRouteMatch } from "react-router-dom";

import AddButton from "../components/schedule/AddButton";
import AddSchedule from "../components/schedule/AddSchedule";
import NothingPlan from "../components/schedule/NothingPlan";
import ScheduleBlock from "../components/schedule/ScheduleBlock";
import JumbotronImg from "../components/common/Jumbotron";
import ScheduleEditingPage from "./ScheduleEditingPage";

const SchedulePage = () => {
  let { path, url } = useRouteMatch();
  const [show, setShow] = useState(false);
  const [addPlans, setAddPlans] = useState([]);
  const handleAdd = (newPlan) => {
    setAddPlans([...addPlans, newPlan]);
    setShow(false);
    //console.log(newPlan, [...addPlans, newPlan], newPlan.planName);
  };

  return (
    <Container fluid>
      <JumbotronImg />
      <Row className="mb-5">
        <Col sm={12} className="pt-3">
          <h3>規劃行程</h3>
        </Col>
      </Row>
      <Tab.Container defaultActiveKey="schedule" id="personal-schedule">
        <Row>
          <Col sm={12}>
            <Nav className="justify-content-center mb-4" variant="tabs">
              <Nav.Item>
                {/* <StyledLink to={`${url}/edit`}>擁有的行程</StyledLink> */}
                <StyledNavLink eventKey="schedule">擁有的行程</StyledNavLink>
              </Nav.Item>
              <Nav.Item>
                {/* <StyledLink to={`${url}/likes`}>收藏的景點</StyledLink> */}
                <StyledNavLink eventKey="attractions">收藏的景點</StyledNavLink>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="schedule" id="schedule">
                {addPlans.length === 0 && (
                  <NothingPlan
                    onShow={() => {
                      setShow(true);
                    }}
                  />
                )}

                <AddSchedule
                  onClose={() => {
                    setShow(false);
                  }}
                  show={show}
                  onAdd={handleAdd}
                />
                {addPlans.map((plan, index) => {
                  return (
                    <ScheduleBlock
                      key={index}
                      scheduleName={plan.planName}
                      period={plan.days}
                      time={() => {
                        const date = new Date();
                        date.toLocaleDateString();
                      }}
                      onDelete={() => {
                        setAddPlans([
                          ...addPlans.slice(0, index),
                          ...addPlans.slice(index + 1)
                        ]);
                      }}
                    />
                  );
                })}
                {addPlans.length === 0 || (
                  <AddButton
                    onShow={() => {
                      setShow(true);
                    }}
                  />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="attractions" id="attractions">
                <p>9999999999</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Switch>
        <Route path={path} exact></Route>
        <Route path={`${path}/likes`}></Route>
        <Route path={`${path}/edit`}></Route>
      </Switch>
    </Container>
  );
};

const StyledLink = styled(Link)`
  color: #825b44;
  &:hover {
    color: #ad0030;
    text-decoration: none;
  }
`;
const StyledNavLink = styled(Nav.Link)`
  color: #825b44;
  &:hover {
    color: #ad0030;
    text-decoration: none;
  }
`;
export default SchedulePage;

//依照新增日期排列
//日期產生Date(dateString)
//套色彩版

//新增的內容???
//調整路由
