import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import DragableItem from "./DragableItem";
import { DoorsContext } from "../context/DoorsContext";

export default function DragableList() {
  const {
    unusedDoors,
    setUnusedDoors,
    setUsedDoors,
    setDraggingData,
    allDoors,
  } = useContext(DoorsContext);

  const onDragStart = (dragData) => {
    setDraggingData(dragData);
  };

  const onDragEnd = (dragDataNode) => {
    setUnusedDoors(
      unusedDoors.filter(
        (item) => item.name !== dragDataNode.getAttribute("door-id")
      )
    );

    setUsedDoors((oldArray) => [
      ...oldArray,
      allDoors.find(
        (item) => item.name === dragDataNode.getAttribute("door-id")
      ),
    ]);
  };

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
        {unusedDoors?.map((door) => (
          <ListGroup.Item action key={door.id}>
            <span>{door.name}</span> 
            &nbsp;
            <DragableItem
              dragObject={door}
              onDragStart={(dragData) => onDragStart(dragData)}
              onDragEnd={(dragDataNode) => onDragEnd(dragDataNode)}
              bgColor={door.color}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
