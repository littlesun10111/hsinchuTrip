import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const LookupArticleCard = () => {
  return (
    <Col className="card-wrap mb-3" sm={5}>
      <Link className="card-image" to="/articleList/">
        <img
          src="https://img.fullfenblog.tw/20180620135907_18.jpg"
          alt=""
          className="img-fluid mb-3"
        />
      </Link>
      <div className="card-hover">
        <h6>新竹尖石景點》數碼天空景觀園區</h6>
      </div>
    </Col>
  );
};
export default LookupArticleCard;
