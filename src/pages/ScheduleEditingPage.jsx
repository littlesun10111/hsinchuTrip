import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import JumbotronImg from "../components/common/Jumbotron";
import EditAttractionsBlock from "../components/schedule/EditAttractionsBlock";
import EditButtonGroup from "../components/schedule/EditButtonGroup";
import SwitchToggle from "../components/schedule/SwitchToggle";
import bidCity from "../assets/scene/bigcity.jpg";
import ermeiLake from "../assets/scene/ermei-lake.jpg";
import qingcaohu from "../assets/scene/Qingcaohu.jpg";
import hexingStation from "../assets/scene/Hexing-Station.jpg";
import nanliaoPort from "../assets/scene/Nanliao-Fishing-Port.jpg";
import AddSuccess from "../components/schedule/AddSuccess";
const ScheduleEditingPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [add, setAdd] = useState(false);
  const [attractions, setAttractions] = useState([]);
  const handleOpen = (checked) => {
    // console.log(`${checked}`);
    setIsOpen(checked);
  };
  const sceneList = [
    { id: 0, title: "巨城購物中心", image: bidCity },
    { id: 1, title: "南寮漁港", image: nanliaoPort },
    { id: 2, title: "青草湖", image: qingcaohu },
    { id: 3, title: "合興車站", image: hexingStation },
    { id: 4, title: "峨嵋湖", image: ermeiLake }
  ];

  return (
    <Container fluid>
      <JumbotronImg />
      <Row>
        <Col sm={12} className="mb-5">
          <h3>行程編輯中</h3>
        </Col>
      </Row>
      <Row>
        <Col
          md={3}
          className="d-flex justify-content-center align-items-center"
        >
          <SwitchToggle onOpen={handleOpen} />
        </Col>
        <EditButtonGroup />
      </Row>
      <Row>
        {isOpen ? (
          <Col md={4}>
            <div className="d-flex justify-content-start ml-3">
              <StyledSceneDiv className="rounded">
                {sceneList.map((sceneInfo) => {
                  return (
                    <EditAttractionsBlock
                      key={sceneInfo.id}
                      title={sceneInfo.title}
                      image={sceneInfo.image}
                      onAdd={({ title }) => {
                        setAdd(true);
                        console.log(`${title}`);
                      }}
                    />
                  );
                })}
              </StyledSceneDiv>
            </div>
          </Col>
        ) : null}
        <Col>
          <div className="mx-3 d-flex justify-content-start">
            <StyledScheduleDiv className="rounded">
              <Col sm={12} className="text-left">
                <h4 className="p-3">標題</h4>
              </Col>
              <Col sm={12}>
                <p>請點擊景點卡片加入行程</p>
              </Col>
            </StyledScheduleDiv>
          </div>
        </Col>
      </Row>
      <AddSuccess
        addScene={add}
        onHide={() => {
          setAdd(false);
        }}
      />
    </Container>
  );
};
const StyledSceneDiv = styled.div`
  width: 90%;
  border: 2px solid #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
const StyledScheduleDiv = styled.div`
  width: 96%;
  min-height: 300px;
  border: 2px solid #cccccc;
`;
export default ScheduleEditingPage;
