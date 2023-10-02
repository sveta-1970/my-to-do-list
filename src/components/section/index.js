import React from "react";
import Title from "../title";
import { Input } from "../input";
import { ListBody } from "../list-body";
import "./section.css";
//import { data } from "../../data";

const Section = () => {

  function onData(value) {
    console.log(data);
  }

  return (
    <section className="to-do-list">
      <Title />
      <Input onData={onData}/>
      <ListBody data={""} />
    </section>
  );
};

export default Section;
