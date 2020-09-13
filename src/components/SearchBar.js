import React, { Component } from "react";

export default class SearchBar extends Component {
  handleChange = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">
              Image Search
              <input type="text" onChange={this.handleChange} />{" "}
            </label>
          </div>
        </form>
      </div>
    );
  }
}
