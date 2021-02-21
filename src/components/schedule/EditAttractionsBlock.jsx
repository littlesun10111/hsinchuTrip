import React from "react";
import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

const EditAttractionsBlock = ({ title, image, onAdd }) => {
  const handleAdd = () => {
    onAdd && onAdd({ title });
  };
  return (
    <div className="mb-3">
      <Card
        className="rounded border border-2"
        hoverable
        style={{ width: 300 }}
        onClick={handleAdd}
        cover={
          <StyledImg
            img={image}
            className="rounded-top"
            alt="big-city"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={title} description="" />
      </Card>
    </div>
  );
};

const StyledImg = styled.div`
  max-width: 100%;
  height: 200px;
  background: url(${(props) => props.img}) no-repeat;
  background-position: center center;
  overflow: hidden;
`;

export default EditAttractionsBlock;
