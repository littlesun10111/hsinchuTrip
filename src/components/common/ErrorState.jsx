import React from "react";
import { Button, Card } from "react-bootstrap";
const ErrorState = ({ onBack }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>404</Card.Title>
        <Card.Text>Page not found</Card.Text>
        <Button variant="info" onClick={onBack && onBack()}>
          Go home
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ErrorState;
