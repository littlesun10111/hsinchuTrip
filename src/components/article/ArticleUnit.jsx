import React from "react";
import { Card } from "react-bootstrap";
import { StyledImgCard, StyledList, StyledImg } from "./ArticleUnit.styled";

const ArticleUnit = ({ image, title, link }) => {
  return (
    <StyledList href={link} target="_blank" rel="noreferrer" className="mb-4">
      <StyledImgCard>
        <StyledImg variant="top" src={image}></StyledImg>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </StyledImgCard>
    </StyledList>
  );
};
export default ArticleUnit;
