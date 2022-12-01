import React, { useState } from "react";
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
  SidebarControls,
} from "./components";
import "./App.css";

function App() {
  const [dragedData, setDragedData] = useState(null);
  const [droppedData, setDroppedData] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <Container>
          <Row>
            <Col lg="4">
              <div className="sidebar">
                {/* <SidebarControls />
                <br /> */}
                <DragableList
                  setDragData={(dragData) => setDragedData(dragData)}
                />
                <br />
                {droppedData && <DroppedItems droppedItem={droppedData} />}
              </div>
            </Col>

            <Col lg="8">
              <SvgViewer
                draggedData={dragedData}
                droppedData={(data) => setDroppedData(data)}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
