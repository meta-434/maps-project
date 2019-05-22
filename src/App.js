import React, { Component } from "react";
import './App.css';
import Main from './components/Main.js';


class App extends Component {
 

  render() {
    
    return (
      <div>
        <h1>Restaurants in Charlottesville near you:</h1>
        <Main />
      </div>
    );
  }
}

export default App;