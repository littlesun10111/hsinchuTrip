import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo-01.png";
const Nav = () => {
  return (
    <nav id="top">
      <ul className="nav align-items-center">
        <li className="nav-item mr-auto">
          <StyledLink to="/" className="nav-link">
            <StyledLogo src={Logo} alt="#" className="img-fluid" />
          </StyledLink>
        </li>
        <li className="nav-item">
          <StyledLink to="/attractionList" className="nav-link">
            景點探索
          </StyledLink>
        </li>
        <li className="nav-item">
          <StyledLink to="/articleList" className="nav-link">
            推薦行程
          </StyledLink>
        </li>
        <li className="nav-item">
          <StyledLink to="/schedulePlan" className="nav-link">
            規劃行程
          </StyledLink>
        </li>
      </ul>
    </nav>
  );
};
const StyledLink = styled(Link)`
  color: #e8e8e8;
  &:hover {
    color: #fff8d3;
  }
  &:active {
    color: #fff8d3;
  }
`;
const StyledLogo = styled.img`
  width: 36px;
  height: 36px;
`;
export default Nav;
