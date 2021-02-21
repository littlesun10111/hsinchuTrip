import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LookupArticleCard from "../common/LookupArticleCard";

const ArticleIntro = () => {
  return (
    <Col sm={12} md={8}>
      <StyledFullScreenSection>
        <div className="mb-4">
          <h3>推薦行程</h3>
          <p>沒有想法的話，可以看看其他人怎麼玩</p>
        </div>
        <div className="d-flex justify-content-center">
          <LookupArticleCard />
          <LookupArticleCard />
        </div>
        <Link className="btn btn-primary" to="/articleList/">
          更多推薦
        </Link>
      </StyledFullScreenSection>
    </Col>
  );
};

const StyledFullScreenSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ArticleIntro;
