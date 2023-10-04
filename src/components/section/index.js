import React, { Component } from "react";
import Title from "../title";
import { Input } from "../input";
import { ListBody } from "../list-body";
import "./section.css";
//import { data } from "../../data";

export default class Section extends Component {
  state = {
    dates: [],
  };

  onData = (value) => {
    if(value){
      this.setState((state) => {
        return {
          dates: [...state.dates, value],
        };
      });
    } else alert("Enter data");
  };

  render() {
    console.log(this.state.dates);
    return (
      <section className="to-do-list">
        <Title />
        <Input onData={this.onData} />
        <ListBody dates={this.state.dates} />
      </section>
    );
  }
}
