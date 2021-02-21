import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PleaseWait from "../common/PleaseWait";
import AddSuccess from "../schedule/AddSuccess";
import {
  StyledCardWrap,
  StyledCardBody,
  StyledImg,
  StyledCardList
} from "./AttractionCard.styled";
import CardTag from "./CardTag";

const AttractionCard = ({ image, title, tagGroup, onAddScene }) => {
  const [tags, setTags] = useState([...tagGroup]);
  const [addToLike, setAddToLike] = useState(false);
  const [wait, setWait] = useState(false);
  const handleAddScene = () => {
    setAddToLike(true);
  };

  return (
    <Col md={4} sm={6} xs={12}>
      <StyledCardList className="nav-item">
        <Link>
          <StyledCardWrap>
            <StyledImg
              src="https://acrossthewater.blog/wp-content/uploads/2020/11/sorry-1536x1024.jpg"
              alt="default"
              className="img-fluid"
            />
            <Card.ImgOverlay className="d-flex align-items-end justify=content-between">
              <StyledCardBody className="text-left py-0">
                <Card.Title
                  onClick={() => {
                    setWait(true);
                  }}
                >
                  {title}
                </Card.Title>
                <Card.Text className="mb-2">
                  {tags.map((tag) => {
                    return (
                      <CardTag tagName={tag} key={tag.toString()}></CardTag>
                    );
                  })}
                </Card.Text>
              </StyledCardBody>
              <Card.Text className="mb-3">
                <span
                  className="material-icons mb-3"
                  style={{ fontSize: "40px", cursor: "pointer" }}
                  onClick={handleAddScene}
                >
                  control_point
                </span>
              </Card.Text>
            </Card.ImgOverlay>
          </StyledCardWrap>
        </Link>
      </StyledCardList>

      <AddSuccess
        addScene={addToLike}
        onHide={() => {
          setAddToLike(false);
        }}
      />
      <PleaseWait
        onWait={wait}
        onHide={() => {
          setWait(false);
        }}
      />
    </Col>
  );
};
export default AttractionCard;
