import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // constructor(props) {
  //   super();
  //   this.onSubmitChange = this.onSubmitChange.bind(this);
  // }
  state = { images: [] };

  onSubmitChange = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID h6yKHrseyNNS8mds_RKYAT8-M-r_MXaw5d0rSkX_Yxo",
      },
    });

    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmitChange} />
        Found : {this.state.images.length} images
      </div>
    );
  }
}
export default App;
