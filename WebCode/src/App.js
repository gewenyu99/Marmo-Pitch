import React, { Component } from 'react';
import './App.css';
import DirectionButton from './components/DirectionButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DirectionButton text=">" bashScript={"cd"}/>
        <DirectionButton text=">" bashScript={"cd"}/>
        <DirectionButton text=">" bashScript={"cd"}/>
      </div>
    );
  }
}

export default App;
