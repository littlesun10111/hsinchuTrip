import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../components/common/Footer";
import ArticleIntro from "../components/homeElement/ArticleIntro";
import AttractionIntro from "../components/homeElement/AttracionIntro";
import HowToUse from "../components/homeElement/HowToUse";
import OpeningText from "../components/homeElement/OpeningText";
import ScrollDown from "../components/homeElement/ScrollDown";
import StartYourTrip from "../components/homeElement/StartYourTrip";
import { slider } from "../utils";
import styled from "styled-components";

const HomePage = () => {
  useEffect(() => {
    slider();
  });
  return (
    <Container fluid>
      <Row>
        <OpeningText />
        <ScrollDown />
      </Row>
      <Row>
        <HowToUse />
      </Row>
      <Row className="justify-content-center">
        <AttractionIntro />
      </Row>
      <Row className="justify-content-center">
        <ArticleIntro />
      </Row>
      <Row>
        <StartYourTrip />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default HomePage;

//單一換頁
//調整畫面css
//整理code
//套色彩版
