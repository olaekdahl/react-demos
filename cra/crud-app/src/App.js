import React, { Component } from 'react';
import Welcome from './Welcome';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Ola!" />
      </div>
    );
  }
}

export default App;
