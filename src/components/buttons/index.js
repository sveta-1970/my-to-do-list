import React from "react";

export default function Button({ name, classes, data, index, action }) {
  return (
    <>
      <button className={classes} onClick={()=>{action(data,index)}}>{name}</button>
    </>
  );
}
