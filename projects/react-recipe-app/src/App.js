import React, { Component } from 'react';
import './App.css';

//components
import Header from "./components/Header";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";


const API_KEY = "d6a0d06d5a83a3cd351ebea8bd50d3cb";

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    if( localStorage.getItem("recipes") != null ){ 
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        this.setState({ recipes });
    }
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <p></p>
        <Form getRecipe={this.getRecipe} className="carousel-item" />
        <Recipes recipes={this.state.recipes} className="carousel-item" />
        <Footer />
      </div>
    );
  }
}

export default App;