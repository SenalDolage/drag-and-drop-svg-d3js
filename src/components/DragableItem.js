import React from "react";

function DragableItem({ dragObject, onDragStart, onDragEnd, bgColor }) {
  const onDragStarting = (e) => {
    // Get the block coordinates
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    // Find the offset of the mouse from those coordinates.
    const offset = [
      e.clientX - currentTargetRect.left,
      e.clientY - currentTargetRect.top,
    ];

    // Pass the drag data
    onDragStart({ dragObject, offset });
  };

  const onDragEnding = (e) => {
    e.stopPropagation();
    onDragEnd(e.target);
  };

  return (
    <div
      className="dragable-item-dot draggable"
      draggable={true}
      onDragStart={onDragStarting}
      onDragEnd={onDragEnding}
      style={{ backgroundColor: bgColor }}
      door-id={dragObject.name}
    />
  );
}

export default DragableItem;
