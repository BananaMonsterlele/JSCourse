import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';

class App extends Component {
  render() {
    return (
    <div>  
      <div className="container">
        <Header />
        <Menu />
      </div>
      <Main />
    </div>
    );
  }
}

export default App;
