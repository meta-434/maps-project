import React, { Component } from "react";
import './App.css';
import Search from './components/Search.js';

import RestaurantList from './components/RestaurantList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcVal : "TEST",
      location : "",
      price : 0,
      rating : 0
    };
   
  }
  
  render() {
    return (
      <div>
        <h1>Restaurants in Charlottesville near you:</h1>
        <p>Narrow your results? --></p>
        <Search />
        <p>---------------------------------------------------------------------------------</p>
        <RestaurantList srcVal ={this.state.srcVal}/>
      </div>
    );
  }
}

export default App;