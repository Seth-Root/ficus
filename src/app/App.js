import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header.js';
import Form from './components/form.js';
import './App.css';

class App extends Component {

  render() {
  
    return (
      <div className="App">
        <Header/>
        <Form/>
      </div>
    );
  }
}



export default App;
