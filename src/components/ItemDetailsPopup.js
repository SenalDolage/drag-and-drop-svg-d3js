import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ItemDetailsPopup({ show, onHide, data }) {
  return (
    <Modal
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="item-details-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Door Details
        </Modal.Title>
      </Modal.Header>
      {data && (
        <Modal.Body>
          <div className="door-detail-item">
            <h6>Id</h6>
            <span>{data.id}</span>
          </div>

          <div className="door-detail-item">
            <h6>Name</h6>
            <span>{data.name}</span>
          </div>

          <div className="door-detail-item">
            <h6>Manufacturer</h6>
            <span>{data.manufacturer}</span>
          </div>

          <div className="door-detail-item">
            <h6>Material</h6>
            <span>{data.material}</span>
          </div>

          <div className="door-detail-item">
            <h6>Color</h6>
            <span>{data.color}</span>
          </div>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
