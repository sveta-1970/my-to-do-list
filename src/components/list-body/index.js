import React from "react";
import Button from "../buttons";

const ListBody = ({ editData, deleteData, dates }) => {
  
  return (
    <>
      {Array.isArray(dates) && dates.length > 0 ? (
        dates.map((data, i) => {
          return (
            <div key={i + data} className="listbody">
              <Button
                name="edit"
                classes="btn btn-primary mt-2 me-2"
                data={data}
                index={i}
                action={editData}
              />
              <Button
                name="delete"
                classes="btn btn-danger mt-2 me-2"
                data={data}
                index={i}
                action={deleteData}
              />
              <span>{i+1+". "}{data}</span>
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
