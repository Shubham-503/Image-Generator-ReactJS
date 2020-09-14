import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSubmitChange(term) {
    console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID h6yKHrseyNNS8mds_RKYAT8-M-r_MXaw5d0rSkX_Yxo",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmitChange} />
      </div>
    );
  }
}
export default App;
