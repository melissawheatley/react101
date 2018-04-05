import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* this is a comment */}
        <Header title="Welcome C24 Unicorns" />
        <Header title="Hey girl" />
        <p className="App-intro">
          To get started, edit <code> src/App.js</code> and save to reload.
            </p>
            <p>woo hoo</p>
            <div>Taco</div>
      </div>
    );
  }
}

export default App;
