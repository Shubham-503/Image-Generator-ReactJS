import React, { Component } from "react";

export default class SearchBar extends Component {
  handleInputChange = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input type="text" onChange={this.handleInputChange} />{" "}
          </div>
        </form>
      </div>
    );
  }
}
