import React from "react";
import "./input.css";

const Input = ({ onData }) => {
  let data = "";
  return (
    <div className="flex">
      <input
        className="new-task"
        type="text"
        placeholder="New to-do"
        onChange={(e) => {
          data = e.target.value;
        }}
      />
      <button className="btn" onClick={() => onData(data)}>
        Save
      </button>
    </div>
  );
};

export { Input };
