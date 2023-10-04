import React from "react";

export default function Button({ name, classes }) {
  return (
    <>
      <button className={classes}>{name}</button>
    </>
  );
}
