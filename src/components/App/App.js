import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <Link to="/" className="nav-link">
            <h1>Home</h1>
          </Link>
          <Link to="/" className="nav-link">
            <h1>Create</h1>
          </Link>
        </nav>
        <main>
          <h1>Hello</h1>
        </main>
      </div>
    );
  }
}

export default App;
