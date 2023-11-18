import React, { Component } from "react";
import Title from "../title";
import { Input } from "../input";
import { ListBody } from "../list-body";
import "./section.css";
//import { data } from "../../data";

export default class Section extends Component {
  state = {
    dates: [], //listData
  };

  inputData = (value) => {
      if (value) {
        this.setState((state) => {
          return {
            dates: [...state.dates, value],
          };
        });
      } else alert("Enter data");
  }
    
  deleteData = (data, index) =>{
      if (data) {
        const updatedDates = [...this.state.dates].slice(); //Make a copy of the "dates" array
        //const index = newData.indexOf(value); //Find the index of the item to be removed
        updatedDates.splice(index, 1); //Remove the item from the array
        this.setState((state) =>{
          return { 
            dates: updatedDates 
          }; //Update the "dates" array in the state
        })
      } else alert("There is no data to delete")
  }
      
  render() {
    console.log(this.state.dates);
    return (
      <section className="to-do-list">
        <Title />
        <Input inputData={this.inputData} />
        <ListBody deleteData={this.deleteData} dates={this.state.dates} />
      </section>
    );
  }
}
