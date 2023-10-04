import React from "react";
import "./input.css";

const Input = ({ onData }) => {
  let data = "";
  let input = null;

  return (
    <div className="flex">
      <input
        className="new-task"
        type="text"
        placeholder="New to-do"
        onChange={(e) => {
          data = e.target.value;
          input = e.target;
        }}
      />
      <button
        className="btn-input"
        onClick={() => {
          onData(data);
          input.value = "";
        }}
      >
        Save
      </button>
    </div>
  );
};

export { Input };
