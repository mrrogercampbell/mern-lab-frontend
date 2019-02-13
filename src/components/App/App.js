import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Home from '../Home/Home'
import Create from '../Create/Create'
import ShowOne from '../ShowOne/ShowOne'

class App extends Component {
  constructor() {
    super()
    this.state = {
        animals: []
    }
}
componentDidMount(){
    axios.get('http://localhost:3001/')
        .then((res) => {
            console.log(res)
            this.setState({animals: res.data})
    })
    .catch((err) => {
        console.log(err)
    })
}

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <Link to="/" className="nav-link">
            <h1>Home</h1>
          </Link>
          <Link to="/new" className="nav-link">
            <h1>Create</h1>
          </Link>
        </nav>
        <main>
          <h1>Welcome to the Fun With Animals App</h1>
          <Route path='/' exact render={(routerProps) => 
            <Home {...routerProps} {...this.state}/>}
          />
          <Route path='/new' exact render={(routerProps) => 
            <Create {...routerProps} {...this.state}/>}
          />
          <Route path='/:id' render={(routerProps) => 
            <ShowOne {...routerProps}{...this.state}/>}
          /> 
        </main>
      </div>
    );
  }
}

export default App;
