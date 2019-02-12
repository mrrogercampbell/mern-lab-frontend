import React, { Component } from 'react';
import axios from 'axios';
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
        let oneAnimal = this.props.animals.find((recOfAnimal) => recOfAnimal._id === this.props.match.params.id)
        return (
            <div>
                {/* <h1>Hello from Single View</h1> */}
                {oneAnimal.animalName}
            </div>
        );
    }
}

export default SingleView;