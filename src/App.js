import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/style.css';

import StarBar from './components/starbar';
import DropDown from './components/dropdown';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Component Practice</h1>
        </div>
        <div>
          <h2>Starbar</h2>
          <StarBar />
          <h2>Dropdown Menu</h2>
          <DropDown />
          <h2>NavBar</h2>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
