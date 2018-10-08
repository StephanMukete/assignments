import React, {Component} from 'react';

import './index.css'

//components
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import { Link, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <header>
                <h1>Intro to React Router</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                </nav>
            </header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path='path' component={component}/>
                
            </Switch>
            <footer>
                ©2018
            </footer>
        </div>
    )
}

export default App;