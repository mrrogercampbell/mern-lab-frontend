import React, { Component } from 'react';
import './Create.css'
// import {Route, Link} from 'react-router-dom'
import axios from 'axios'

class Create extends Component {
    constructor(){
        super()
            this.state = {
                animalName: '',
                photoUrl: '',
                animalOrigin: '',
                animalDetails: '',
            }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value }, 
        () => {
            console.log(this.state)
        })
        // console.log(evt.target.name)
        // console.log(evt.target.value)
    }
    handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/', this.state)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        console.log("CreateNewAnimal Fired");
    }
   
    render() {
        return (
            <div>
                <h1>Hello From Create</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name of Animal:</label>
                        <br/>
                    <input type="text" name="animalName" value={this.state.value} onChange={this.handleChange} />
                        <br/>
                    <label>Photo URL:</label>
                        <br/>
                    <input type="url" name="photoUrl" value={this.state.value} onChange={this.handleChange} />
                        <br/>
                    <label>Animal Origin:</label>
                        <br/>
                    <input type="text" name="animalOrigin" value={this.state.value} onChange={this.handleChange} />
                        <br/>
                    <label>Details on this Particular:</label>
                        <br/>
                    <textarea type="text" name="animalDetails" value={this.state.value} onChange={this.handleChange} />
                        <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Create;