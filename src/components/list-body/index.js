import React from "react";
import Edit from "../edit";
import Delete from "../delete";

const ListBody = (props)=>{
  return (
    props.data.map((el, index) =>{
      return (
        <div key={index*2+"k"}>
          <Edit />
          <Delete />
          <span>{el.title}</span>
        </div>
      );
    })
  );
}

export {ListBody}