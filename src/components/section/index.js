import React from "react";
import Title from "../title";
import { Input } from "../input";
import { ListBody } from "../list-body";
import "./section.css";
import { data } from "../../data";

const Section = () => {
  return (
    <section className="to-do-list">
      <Title />
      <Input />
      <ListBody data={data} />
    </section>
  );
};

export default Section;
