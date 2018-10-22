import React, { Component } from 'react';
import { Link, } from "react-router-dom";

// components
import Header from './Header'
import Footer from './Footer'

var GifPlayer = require('react-gif-player');
const API_KEY = "d6a0d06d5a83a3cd351ebea8bd50d3cb";

class Recipe extends React.Component {
  state = {
    activeRecipe: [],
    Loading : true,
    err: null,
    gif: '/img/2.gif',
    still: '/img/2.jpg'
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0], Loading : false, err: false
      });
    console.log(this.state.activeRecipe);
  
  }
  render() {
    const { Loading, err } = this.state;
    const recipe = this.state.activeRecipe;
    return (
      <div>
        <Header />
        <p></p>
        {Loading  ?
                    <div> <GifPlayer gif={ require('./img/2.gif')} still ={ require('./img/2.gif')}/></div>
                    :
                    err ?
                    <div>could not get your data</div>
                    : 
                    <div className="container">
                      { this.state.activeRecipe.length !== 0 &&
                        <div className="active-recipe">
                          <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                          <h3 className="active-recipe__title">{ recipe.title }</h3>
                          <h4 className="active-recipe__publisher">
                            Publisher: <span>{ recipe.publisher }</span>
                          </h4>
                          <p className="active-recipe__website">Website: 
                            <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                          </p>
                          <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                          </button>
                        </div>
                      }
                    </div>
        }
        <p></p>
        <Footer />
      </div>

    );
  }
};

export default Recipe;