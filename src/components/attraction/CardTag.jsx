import React from "react";
import { Badge } from "react-bootstrap";
const CardTag = ({ tagName }) => {
  return (
    <Badge variant="secondary" className="mr-2 mb-2">
      {tagName}
    </Badge>
  );
};
export default CardTag;
