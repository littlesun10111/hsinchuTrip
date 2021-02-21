import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ErrorState from "../components/common/ErrorState";
const ErrorPage = () => {
  const history = useHistory();
  return (
    <Container>
      <Row>
        <Col>
          <ErrorState
            onBack={() => {
              //console.log("go back");
              history.push("/");
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default ErrorPage;
