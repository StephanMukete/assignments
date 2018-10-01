import React, { Component } from 'react';

class Likes extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0
        }
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleUpvote() {
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }))
    }
    handleDownvote() {
        this.setState(prevState => ({
            likes: prevState.likes - 1
        }))
    }
    handleReset(){
        this.setState({likes : 0})
        // this.setState(prevState => ({
        //     likes: 0
        // }))
    }
    render() {
        const { likes } = this.state;
        return (
            <div>
                <button onClick={this.handleUpvote}>Upvote</button>
                <button onClick={this.handleDownvote}>DownVote</button>
                <button onClick={this.handleReset}>Reset</button>
                <p>Likes: <span>{likes}</span></p>
            </div>
        )
    }
}

export default Likes;