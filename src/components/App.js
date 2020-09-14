import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // constructor(props) {
  //   super();
  //   this.onSubmitChange = this.onSubmitChange.bind(this);
  // }
  state = { images: [] };

  onSubmitChange = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmitChange} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
