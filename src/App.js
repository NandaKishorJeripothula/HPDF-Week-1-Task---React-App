import React, { Component } from 'react';
import 'typeface-roboto';
//import logo from './logo.svg';
import './App.css';
import AppBarNavB from './components/AppBarNavB';
import PageBody from './components/PageBody';
import Snackbar2 from './components/Snackbar2';


class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */
      <div>
        <Snackbar2/>
       <AppBarNavB/>  
        <PageBody/>       
      </div>
      );
  }
}

export default App;
