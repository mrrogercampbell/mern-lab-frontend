import React, { Component } from 'react';
import axios from 'axios';
import './Home.css'
import {Link} from 'react-router-dom'

class Home extends Component {
    handleDelete(e){
        e.preventDefault()
        axios.delete(`http://localhost:3001/ `)
            .then((res) => {
                console.log(res)

            })
    }
    render() {
        const animals = this.props.animals.map(item => {
            return (
                <div key={item.animalName}>
                <Link to={'/' + item._id}>
                    <img src={item.photoUrl} alt={item.animalName}/>
                    <h1>{item.animalName}</h1>
                    {/* <p>{item.animalOrigin}</p>
                    <p>{item.animalDetails}</p> */}
                    {/* <p>{item._id}</p> */}
                    {/* <button onClick={this.handleDelete}>Delete {item.animalName}</button> */}
                </Link>
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