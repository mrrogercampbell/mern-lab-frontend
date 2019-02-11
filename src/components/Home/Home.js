import React, { Component } from 'react';
import axios from 'axios';
import './Home.css'

class Home extends Component {
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
        const animals = this.state.animals.map((animal, index) => {
            return (
                <div key={index}>
                <img src={animal.photoUrl} alt={animal.animalName}/>
                    <h1>{animal.animalName}</h1>
                    <p>{animal.animalOrigin}</p>
                    <p>{animal.animalDetails}</p>
                </div>
            )
        })
        return (
            <div>
                {animals}
            </div>
        );
    }
}

export default Home;