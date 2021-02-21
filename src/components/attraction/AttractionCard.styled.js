import styled from "styled-components";
import { Card } from "react-bootstrap";
export const StyledCardWrap = styled(Card)`
  border-radius: 1rem;
  border: none;
  color: #fff8d3;
  &:hover {
    color: #ad0030;
    box-shadow: 1px 7px 20px 2px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1px 7px 20px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 1px 7px 20px 2px rgba(0, 0, 0, 0.5);
  }
`;
export const StyledCardBody = styled(Card.Body)`
  padding: 0;
`;
export const StyledImg = styled(Card.Img)`
  border-radius: 0.5rem;
  &:hover {
    opacity: 0.5;
    background: #fff;
  }
`;
export const StyledCardList = styled.li`
  margin-bottom: 28px;
`;
