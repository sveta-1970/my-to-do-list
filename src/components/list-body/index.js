import React from "react";
import Button from "../buttons"

const ListBody = ({ dates }) => {
  return (
    <>
      {Array.isArray(dates) && dates.length > 0 ? (
        dates.map((data, index) => {
          return (
            <div key={index + data}>
              <Button name="edit" classes="btn btn-primary" />
              <Button name="delete" classes="btn btn-danger" />
              <span>{data}</span>
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
