import React, {Component} from "react";
import beerData from "./data";
import Logo from "./component/Logo/Logo";
import Header from "./component/Header/Header";
import Form from "./component/Form/Form.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beer: beerData.beerData,
    };
  }

  getBeer = e => {
    e.preventDefault();
    console.log("hello");
  };

  render() {
    return (
      <div>
        <Header />
        <Logo />
        <Form getBeer={this.getBeer} />
      </div>
    );
  }
}

export default App;
