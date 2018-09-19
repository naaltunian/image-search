import React, { Component } from 'react';
import NavBar from "./components/NavBar/NavBar.js";
import Search from "./components/Search/Search.js";

import './App.css';

class App extends Component {
  render() {
    return (

        <div>
          <NavBar />
          <Search />
        </div>

    );
  }
}

export default App;
