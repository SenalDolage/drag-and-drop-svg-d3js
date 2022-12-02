import React, { useState, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import SvgDeleteDoor from "../utils/SvgDeleteDoor";
import SvgGetDoorNode from "../utils/SvgGetDoorNode";
import ItemDetailsPopup from "./ItemDetailsPopup";
import { DoorsContext } from "../context/DoorsContext";

export default function DroppedItems() {
  const { setUnusedDoors, usedDoors, setUsedDoors } = useContext(DoorsContext);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState();

  const removeItemFromSvg = (itemToRemove) => {
    SvgDeleteDoor.remove(itemToRemove.name);
    setUnusedDoors((oldArray) => [...oldArray, itemToRemove]);
    setUsedDoors(usedDoors.filter((item) => item !== itemToRemove));
  };

  const viewDetails = (itemToView) => {
    SvgGetDoorNode.viewDetails(itemToView.name);
    setModalShow(true);
    setModalData(itemToView);
  };

  return (
    <>
      {usedDoors.length > 0 && (
        <>
          <Accordion className="dropped-items">
            <Accordion.Item>
              <Accordion.Header>Dropped Items</Accordion.Header>
              <Accordion.Body>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Search
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>

                <ListGroup>
                  {usedDoors?.map((item) => (
                    <ListGroup.Item key={item.id}>
                      <div className="dropped-item-list-item">
                        <span className="dropped-item-name">{item.name}</span>
                        <span
                          className="view-details-link text-success"
                          onClick={() => viewDetails(item)}
                        >
                          View details
                        </span>
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

          <ItemDetailsPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={modalData}
          />
        </>
      )}
    </>
  );
}
