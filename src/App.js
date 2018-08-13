import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import { BrowserRouter as Router, StaticRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
