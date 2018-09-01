import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

// components
import AppNavBar from './components/layout/AppNavBar';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <AppNavBar />
          <div className="container">
            <h1>Client Panel</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
