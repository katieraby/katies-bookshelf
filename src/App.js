import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  state = { isLoaded: true, formattedData: [] };
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
