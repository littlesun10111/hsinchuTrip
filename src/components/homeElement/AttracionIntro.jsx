import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AttractionIntro = () => {
  return (
    <Col sm={12} md={8}>
      <StyledFullScreenSection>
        <div className="mb-5">
          <h3>景點探索</h3>
          <p>想尋找什麼奇特景點?都藏在這裡了，快去搜尋吧!</p>
        </div>
        <div className="slider-block">
          <ul className="nav">
            <li className="nav-item d-flex align-items-center justify-content-center">
              <StyledIntroDiv>
                <div>
                  <h4>北埔冷泉</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam autem voluptas, deserunt dolores dolorem velit error.
                    Deleniti, rerum fugiat eos, quam incidunt ab, nihil iste
                    culpa officiis quod dolore atque.
                  </p>
                </div>
                <StyledIconWrap>
                  <i className="ri-arrow-left-circle-line"></i>
                  <i className="ri-arrow-right-circle-line"></i>
                </StyledIconWrap>
                <Link className="btn btn-primary" to="/attractionList/">
                  更多景點
                </Link>
              </StyledIntroDiv>
              <StyledIntroGif>
                <Link to="/attractionList/">
                  <StyledImg
                    src="https://photo.travelking.com.tw/scenery/5E21E4AC-D720-444B-97FB-FC6A1E724042_e.jpg"
                    alt="attractions"
                  />
                </Link>
              </StyledIntroGif>
            </li>
          </ul>
        </div>
      </StyledFullScreenSection>
    </Col>
  );
};
const StyledIntroDiv = styled.div`
  width: 40%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledIntroGif = styled.div`
  width: 40%;
`;
const StyledIconWrap = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;
const StyledFullScreenSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  width: 90%;
  height: auto;
  overflow: hidden;
`;
export default AttractionIntro;
