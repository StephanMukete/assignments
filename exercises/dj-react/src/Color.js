import React, { Component } from 'react';

class Color extends Component {
    constructor() {
        super();
        this.state = {
         color: "white"
        }
        this.handleColor = this.handleColor.bind(this);
    }
    handleColor() {
        this.setState(prevState => ({
            color: prevState.color = "blue"
        }))
    }
 
    render() {
        const { color } = this.state;
        return (
            <div style={color}>
                <button onClick={this.handleColor}>change </button>

            </div>
        )
    }
}

export default Color;