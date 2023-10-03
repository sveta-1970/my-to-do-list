import React from "react";
import Edit from "../edit";
import Delete from "../delete";

const ListBody = ({ dates }) => {
  return (
    <>
      {Array.isArray(dates) ? (
        dates.map((data, index) => {
          return (
            <div key={index + data}>
              <span>data</span>
            </div>
          );
        })
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
