import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Books from "./components/Books";

class App extends Component {
  state = { isLoaded: true, formattedData: [] };
  render() {
    return (
      <div>
        <Header />
        {this.state.isLoaded ? <Books /> : null}
      </div>
    );
  }
}

export default App;
