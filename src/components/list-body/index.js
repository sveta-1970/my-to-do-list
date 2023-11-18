import React from "react";
import Button from "../buttons";

const ListBody = ({ deleteData, dates }) => {
  
  return (
    <>
      {Array.isArray(dates) && dates.length > 0 ? (
        dates.map((data, index) => {
          return (
            <div key={index + data} className="listbody">
              <Button
                name="edit"
                classes="btn btn-primary mt-2 me-2"
                //onClick={()=> onData("edit", data)}
              />
              <Button
                name="delete"
                classes="btn btn-danger mt-2 me-2"
                onClick={() => deleteData(data, index)}
              />
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
