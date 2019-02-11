import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Home from '../Home/Home'

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
          <h1>Hello From App Component</h1>
          <Route path='/' exact render={(routerProps) => <Home {...routerProps} {...this.state}/>}/>
        </main>
      </div>
    );
  }
}

export default App;
