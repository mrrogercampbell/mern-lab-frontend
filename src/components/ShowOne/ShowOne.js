import React, { Component } from 'react';
import axios from 'axios';
import './ShowOne.css'
// import {Route, Link} from 'react-router-dom'

class SingleView extends Component {
    constructor(){
        super()
        this.prop = {
            animals: []
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:3001/`)
            .then((res) => {
                console.log(res)
                this.setState({animals: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    render() {
        let animal = this.props.animals.filter(animal => 
            animal.animalName === this.props.match.params.animalName)[0]
        return (
            <div>
                {/* <h1>Hello from Single View</h1> */}
                {animal.animalName}
            </div>
        );
    }
}

export default SingleView;