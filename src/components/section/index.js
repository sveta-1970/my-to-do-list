import React, { Component } from "react";
import Title from "../title";
import { Input } from "../input";
import { ListBody } from "../list-body";
import "./section.css";
//import { data } from "../../data";

export default class Section extends Component {
  state = {
    dates: [],
    valueToEdit: null
  };

  inputData = (value) => {
    if (value) {
      this.setState((state) => {
        return {
          dates: [...state.dates, value],
        };
      });
    } else alert("Enter data");
  };

  editData = (data, index) => {
    if (data) {
      const updatedDates = [...this.state.dates];
      const value = updatedDates.splice(index, 1);
      this.setState((state) => {
        return {
          dates: updatedDates,
          valueToEdit: value[0],
        }; //Update the "dates" array in the state
      });
      
    }
  };

  deleteData = (data, index) => {
    if (data) {
      const updatedDates = [...this.state.dates];
      updatedDates.splice(index, 1); //Remove the item from the array
      this.setState((state) => {
        return {
          dates: updatedDates,
        }; //Update the "dates" array in the state
      });
    } else alert("There is no data to delete");
  };

  render() {
    console.log(this.state.dates);
    return (
      <section className="to-do-list">
        <Title />
        <Input inputData={this.inputData} editData={this.state.valueToEdit} />
        <ListBody
          editData={this.editData}
          deleteData={this.deleteData}
          dates={this.state.dates}
        />
      </section>
    );
  }
}
