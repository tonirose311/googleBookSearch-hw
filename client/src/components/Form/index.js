import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ float: "center", marginBottom: 10 }} id="btn" className={"btn"}>
      {children}
    </button>
  );
}
