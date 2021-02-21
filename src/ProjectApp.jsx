import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorState from "./components/common/ErrorState";
import Nav from "./components/common/Nav";
import ArticleListPage from "./pages/ArticleListPage";
import AttractionListPage from "./pages/AttractionListPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import { Col, Container, Row } from "react-bootstrap";
import { fixedNav } from "./utils";
import ScheduleEditingPage from "./pages/ScheduleEditingPage";
const ProjectApp = () => {
  useEffect(() => {
    fixedNav();
  });
  return (
    <BrowserRouter>
      <Container fluid className="navFixed fixtop">
        <Row>
          <Col sm={12}>
            <Nav />
          </Col>
        </Row>
      </Container>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route
          path="/attractionList"
          exact
          component={AttractionListPage}
        ></Route>
        <Route path="/schedulePlan" component={SchedulePage} exact></Route>
        <Route path="/articleList" component={ArticleListPage}></Route>
        <Route
          path="/schedulePlan/editing"
          component={ScheduleEditingPage}
          exact
        ></Route>
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default ProjectApp;
