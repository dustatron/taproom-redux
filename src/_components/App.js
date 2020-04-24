import React from "react";
import Header from "./Layout/Navbar";
import TapList from "./Tap/List";
import KegAdd from "./Keg/Add";
import KegDetails from "./Keg/Details";
import KegEdit from "./Keg/Edit";
//bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <h1 className="text-center"> Main App </h1>

        <Row>
          <Col xs={12} md={7}>
            <TapList />
          </Col>
          <Col xs={6} md={5}>
            <KegAdd />
            <KegDetails />
            <KegEdit />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
