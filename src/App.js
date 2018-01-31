import React, { Component } from 'react';
import MainPage from './pages/mainpage/mainpage.js';
import Post from './pages/postForm/post.js';
import Login from './pages/login/login.js'
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/mainpage' component={MainPage}/>
          <Route path='/mainpage/post' component={Post}/>
          <Route path='/mainpage/login' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
