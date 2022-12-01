import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import DragableItem from "./DragableItem";

const doors = [
  { name: "D1", color: "green", uid: "123" },
  { name: "D2", color: "green", uid: "456" },
  { name: "D3", color: "green", uid: "789" },
  { name: "D4", color: "green", uid: "741" },
  { name: "D5", color: "green", uid: "852" },
];

export default function DragableList({ setDragData }) {
  const onDragStart = (dragData) => {
    setDragData(dragData);
  };

  const onDragEnd = () => {};

  return (
    <div className="dragging-blocks">
      <h5 className="door-title">Progress Doors</h5>

      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <ListGroup defaultActiveKey="#link1">
        {doors.map((door) => (
          <ListGroup.Item action key={door.name}>
            <DragableItem
              dragObject={door}
              onDragStart={(dragData) => onDragStart(dragData)}
              onDragEnd={() => onDragEnd()}
              bgColor={door.color}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
