import React, {Component} from "react";

import beerData from "./data";
import Logo from "./component/Logo/Logo";
import Header from "./component/Header/Header";
import Form from "./component/Form/Form";
import SearchResult from "./component/SearchResult/SearchResult";

import "./App.css";


class App extends Component {
  state = {
    beer: [],
    result: [],
    searchStyle: {},
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
    this.setState({
      result: result,
      searchStyle: {display: "block"}
    });
  };

  componentDidMount = () => {
    this.setState({
      beer: beerData.beerData,
      searchStyle: {display: "none"},
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Logo />
        <Form getBeer={this.getBeer} />
        <SearchResult result={this.state.result} style={this.state.searchStyle}/>
      </div>
    );
  }
}

export default App;
