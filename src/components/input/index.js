import React from "react";
import "./input.css";

const Input = ({ inputData }) => {
  let data = "";
  let input = "";

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
        name="save"
        onClick={() => {
          inputData(data);
          input.value = "";
        }
      }
      >
        Save
      </button>
    </div>
  );
};

export { Input };
