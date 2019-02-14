import React, { Component } from 'react';
// import axios from 'axios';
import './ShowOne.css'
// import {Route, Link} from 'react-router-dom'

class ShowOne extends Component {
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
    componentWillMount(){
        console.log('will mount. ShowOne')
    }

    render() {
        let oneAnimal = this.props.animals.find(recOfAnimal => recOfAnimal.id === this.props.match.params._id)
        console.log(oneAnimal)
        return (
            <div>
                {console.log(oneAnimal)}
                <h1>{oneAnimal.animalName}</h1>
                <img src={oneAnimal.photoUrl} alt={oneAnimal.animalName}/>
                <h1>{oneAnimal.animalOrigin}</h1>
                <h1>{oneAnimal.animalDetails}</h1>
            </div>
        )
    }
}

export default ShowOne;