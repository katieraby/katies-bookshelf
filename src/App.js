import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  state = { isLoaded: true, formattedData: [] };
  render() {
    return (
      <div>
        <Header />
        {this.state.isLoaded ? <p>Bookshelves</p> : null}
      </div>
    );
  }
}

export default App;
