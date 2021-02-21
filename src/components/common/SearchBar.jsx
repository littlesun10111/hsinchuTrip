import React, { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
const SearchBar = ({ onSearch }) => {
  const [selectedvalue, setSelectedvalue] = useState("--地區--");
  const handleSelected = (e) => {
    setSelectedvalue(e.target.value);
    //console.log(e.target.value);
  };
  const handleSearch = () => {
    //console.log(selectedvalue)
    onSearch && onSearch(selectedvalue);
  };
  return (
    <Form>
      <Form.Row>
        <Col xs={{ span: 5, offset: 3 }}>
          <Form.Label htmlFor="placeInput" srOnly>
            地區
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>選擇區域</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              id="country"
              as="select"
              value={selectedvalue}
              custom
              onChange={handleSelected}
            >
              <option>--地區--</option>
              <option value="北區">新竹市北區</option>
              <option value="東區">新竹市東區</option>
              <option value="香山區">新竹市香山區</option>
              <option value="竹北市">新竹縣竹北市</option>
              <option value="竹東鎮">新竹縣竹東鎮</option>
              <option value="新埔鎮">新竹縣新埔鎮</option>
              <option value="關西鎮">新竹縣關西鎮</option>
              <option value="芎林鄉">新竹縣芎林鄉</option>
              <option value="橫山鄉">新竹縣橫山鄉</option>
              <option value="新豐鄉">新竹縣新豐鄉</option>
              <option value="湖口鄉">新竹縣湖口鄉</option>
              <option value="北埔鄉">新竹縣北埔鄉</option>
              <option value="峨嵋鄉">新竹縣峨嵋鄉</option>
              <option value="寶山鄉">新竹縣寶山鄉</option>
              <option value="尖石鄉">新竹縣尖石鄉</option>
              <option value="五峰鄉">新竹縣五峰鄉</option>
            </Form.Control>
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={handleSearch}>
            探索去
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};
export default SearchBar;
