import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {link} from 'react-router-dom'
import About from './About'

function App()  {
    return (
      <div className="App">
        <header>
          <h1>Intro to React Router</h1>
          <nav>
            <link to ='/'>Home</link>
            <link to ='/about'>About</link>
            <link to ='/about'>About</link>
          </nav>
        </header>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/about' component={About}/>
          <Route path='/about' component={About}/>
        </Switch>
        <footer>
          ©2018
        </footer>
        }
      </div>
    );
  }

export default App;
