import React, {Component} from "react";
import beerData from "./data";
import Logo from "./component/Logo/Logo";
import Header from "./component/Header/Header";
import Form from "./component/Form/Form.js";
import "./App.css";

class App extends Component {
  state = {
    beer: [],
    result: {},
  };

  getBeer = e => {
    e.preventDefault();
    const submitData = {
      OG: e.target.elements.OG.value,
      FG: e.target.elements.FG.value,
      IBU: e.target.elements.IBU.value,
      SRM: e.target.elements.SRM.value,
      ABV: e.target.elements.ABV.value,
    };
    const result = this.state.beer.filter(item => (
      submitData.OG >= item.OG_min && submitData.OG <= item.OG_max &&
        submitData.FG >= item.FG_min && submitData.FG <= item.FG_max &&
        submitData.IBU >= item.IBU_min && submitData.IBU <= item.IBU_max &&
        submitData.SRM >= item.SRM_min && submitData.SRM <= item.SRM_max &&
        submitData.ABV >= item.ABV_min && submitData.ABV <= item.ABV_max 
    ));
    this.setState({result: result[0]});
  };

  componentDidMount = () => {
    this.setState({beer: beerData.beerData});
  }

  render() {
    return (
      <div>
        <Header />
        <Logo />
        <Form getBeer={this.getBeer} />
        {this.state.result ? <h1>{this.state.result.name}</h1> : <h1>No result</h1>}
      </div>
    );
  }
}

export default App;
