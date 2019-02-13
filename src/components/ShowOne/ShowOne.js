import React, { Component } from 'react';
// import axios from 'axios';
import './ShowOne.css'
// import {Route, Link} from 'react-router-dom'

class SingleView extends Component {
    // constructor(){

    // componentDidMount(){
    //     axios.get(`http://localhost:3001/`)
    //         .then((res) => {
    //             console.log(res)
    //             this.setState({animals: res.data})
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }
    
    render() {
        let oneAnimal = this.props.animals.find((recOfAnimal) => recOfAnimal._id === this.props.match.params._id)
        return (
            <div>
                {console.log(oneAnimal)}
                {console.log(this.props.animals.animalName)}
                {this.props.animals.animalName}
                <h1>Hello from Single View</h1>
                <h1>{this.props.animals.animalName}</h1>
            </div>
        );
        
    }
}

export default SingleView;