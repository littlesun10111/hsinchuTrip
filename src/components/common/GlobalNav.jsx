import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import flower from "../../assets/pexels-harry-cooke-6194973.jpg";
const GlobalNav = ({ title, onSearch, image }) => {
  return (
    <StyledNavitemWrap className="mb-2" md={2} sm={3}>
      <StyledLi className="btn" onClick={onSearch && onSearch()}>
        <StyledBg img={image}></StyledBg>
        <h6 className="mb-0">{title}</h6>
      </StyledLi>
    </StyledNavitemWrap>
  );
};
const StyledNavitemWrap = styled(Col)`
  width: 150px;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
  @media (max-width: 576px) {
    &:first-child {
      padding-left: 15px;
    }
    &:last-child {
      padding-right: 15px;
    }
    width: 50%;
  }
`;
const StyledBg = styled.div`
  width:100%;
  height:100%;
  border-radius: 0.5rem;
  background: url(${(props) => props.img}) no-repeat;
  /* background: url(${flower}) no-repeat; */
  background-size: cover;
  background-position: center center;
  overflow:hidden;
  opacity:0.5;
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  position: absolute;
  left: 0;
  top: 0;
`;
const StyledLi = styled.li`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border: 2px solid #539447;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export default GlobalNav;
