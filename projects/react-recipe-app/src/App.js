

import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "d6a0d06d5a83a3cd351ebea8bd50d3cb";

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=50`)

    const data = await api_call.json();
    
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    if(  localStorage.getItem("recipes") != null){ 
     const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        this.setState({ recipes });
    }
      }
      componentUpdate = () => {
        if(  localStorage.getItem("recipes") != null){ 
         const json = localStorage.getItem("recipes");
            const recipes = JSON.parse(json);
            this.setState({ recipes });
        }
          }﻿
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;