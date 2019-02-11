import React, { Component } from 'react';
import axios from 'axios';

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
                    <p>{animal.animalName}</p>
                    <p>{animal.animalOrigin}</p>
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