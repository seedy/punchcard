import React, { Component } from 'react';
import './App.css';
import CardList from './core/post/card.list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardList />
        </header>
      </div>
    );
  }
}

export default App;
