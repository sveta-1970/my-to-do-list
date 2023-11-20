import React, {useEffect, useRef} from "react";
import "./input.css";

const Input = ({ inputData, editData }) => {
  let data = editData || "";
  let inputRef = useRef(null);

  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.value = editData || "";
    }
  }, [editData]);  

  return (
    <div className="flex">
      <input
        className="new-task"
        type="text"
        placeholder="New to-do"
        ref={inputRef}
        onChange={(e) => {
          data = e.target.value;
          //input = e.target;
        }}
      />
      <button
        className="btn-input"
        name="save"
        onClick={() => {
          inputData(data);
          inputRef.current.value = ""; //обнуляємо строку вводу після передачі даних до inputData
        }}
      >
        Save
      </button>
    </div>
  );
};

export { Input };
