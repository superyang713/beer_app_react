import React, {Component} from "react";
import beerData from "./data";
import Header from "./Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beer: beerData,
    };
  }

  render() {
    return (
      <div>
        <Header text="This is the header"/>
        <h1>Hello {this.state.beer["Light Lager"].data[1].name}</h1>
      </div>
    );
  }
}

export default App;
