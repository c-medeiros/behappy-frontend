import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import NewUser from './components/NewUser';
import Label from './components/Label';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewUser />
        <Label />
      </div>
    );
  }
}

export default App;
