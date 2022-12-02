import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  DragableList,
  SvgViewer,
  Header,
  Footer,
  DroppedItems,
} from "./components";
import { DoorsContextProvider } from "./context/DoorsContext";
import "./App.css";

function App() {
  return (
    <DoorsContextProvider>
      <div className="App">
        <Header />
        <div className="page-content">
          <Container>
            <Row>
              <Col lg="4">
                <div className="sidebar">
                  <DragableList />
                  <br />
                  <DroppedItems />
                </div>
              </Col>

              <Col lg="8">
                <SvgViewer />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </DoorsContextProvider>
  );
}

export default App;
