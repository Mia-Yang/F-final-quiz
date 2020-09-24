import React, { Component } from 'react';
import './App.scss';
import List from './components/List/list'
import Result from './components/Result/result';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Result />
        <List />
      </div>
    );
  }
}

export default App;
