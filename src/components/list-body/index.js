import React from "react";
import Edit from "../edit";
import Delete from "../delete";

const ListBody = () => {
  const data = null;
  return (
    <>
      {Array.isArray(data) ? (
        <div>
          <></>
          <span></span>
        </div>
      ) : (
        <div>The task is absent</div>
      )}
    </>
  );
};

export { ListBody };

/*
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
*/
