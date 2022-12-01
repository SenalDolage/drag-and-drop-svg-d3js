import React from "react";

export default function SidebarControls() {
  return (
    <div className="sidebar-controls">
      <button type="button" className="btn btn-secondary">
        Zoom +
      </button>
      &nbsp;
      <button type="button" className="btn btn-secondary">
        Zoom -
      </button>
      &nbsp;
      <button type="button" className="btn btn-secondary">
        Save
      </button>
      &nbsp;
      <button type="button" className="btn btn-secondary">
        Clear all doors
      </button>
    </div>
  );
}
