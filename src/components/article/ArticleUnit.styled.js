import { Card } from "react-bootstrap";
import styled from "styled-components";
export const StyledImgCard = styled(Card)`
  border: none;
  border-radius: 0.5rem;
  &:hover {
    box-shadow: 1px 7px 20px 2px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1px 7px 20px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 1px 7px 20px 2px rgba(0, 0, 0, 0.5);
  }
`;
export const StyledImg = styled(Card.Img)`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  height: 300px;
  width: auto;
  overflow: hidden;
`;
export const StyledList = styled.a`
  display: block;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: var(--red);
  }
  border-radius: 1rem;
`;

//#fff8d3
//#ad0030
//#825b44
//#539447
//#4fad4e
