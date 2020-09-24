import React, { Component } from 'react';
import './App.scss';
import Trainees from './components/Trainees/trainees'
import Trainers from './components/Trainers/trainers'
import Groups from './components/Groups/groups';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Groups />
        <Trainers />
        <Trainees />
      </div>
    );
  }
}

export default App;
