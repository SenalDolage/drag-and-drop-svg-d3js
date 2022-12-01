import React, { useState , useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import SvgDeleteDoor from "../utils/SvgDeleteDoor";

export default function DroppedItems({ droppedItem }) {
  const [droppedData, setDroppedData] = useState([]);

  if (!droppedData?.includes(droppedItem)) {
    setDroppedData((oldArray) => [...oldArray, droppedItem]);
  }

  const removeItemFromSvg = (itemToRemove) => {
    SvgDeleteDoor.remove(itemToRemove.name);
    let filteredArr = droppedData.filter((item) => item !== itemToRemove);
    setDroppedData([]);
    setDroppedData(filteredArr);
    console.log('droppedData', droppedData);
  };

  useEffect(() => {
  }, [droppedData])

  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>Dropped Items</Accordion.Header>
        <Accordion.Body>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <ListGroup>
            {droppedData.length > 0 &&
              droppedData?.map((item) => (
                <ListGroup.Item key={item.uid}>
                  <div className="dropped-item-list-item">
                    <span className="dropped-item-name">{item.name}</span>
                    <span
                      className="remove-item-link text-danger"
                      onClick={() => removeItemFromSvg(item)}
                    >
                      Restore
                    </span>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
