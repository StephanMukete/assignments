import React, {Component}  from 'react';
import {render} from 'react-dom'


export default class Boxes extends Component { 
    constructor(){
        super();
        this.state ={
            tLeft : "red",
            tRight: 'gray',
            bLeft: "pink",
            bRight: 'green'
        }
        this.changeAllToWhite = this.changeAllToWhite.bind(this);
        this.changeToPurple = this.changeToPurple.bind(this);
        this.changeToBlue1 = this.changeToBlue1.bind(this);
        this.changeToBlue2 = this.changeToBlue2.bind(this);
    }
    changeAllToWhite(){
        this.setState({
            tLeft : "white",
            tRight: 'white',
            bLeft: "white",
            bRight: 'white'
        })
    }
    changeToPurple(){
        this.setState({
            tLeft : "purple",
            tRight: 'purple',
        })
    }
    changeToBlue1(){
        this.setState({
            bLeft : "blue"
        })
    }
    changeToBlue2(){
        this.setState({
            bRight : "blue"
        })
    }
    render(){  
        const {tLeft, tRight, bLeft, bRight } = this.state
    return (
    <div >
        <button onClick = {this.changeAllToWhite}>All White</button>
        <button onClick = {this.changeToPurple}>top to purple</button>
        <button onClick = {this.changeToBlue1}>buttom to blue</button>
        <button onClick = {this.changeToBlue2}>buttom to blue</button>
        <div className="box-container">
            <div className="box" style={{backgroundColor: tLeft}}></div>
            <div className="box" style={{backgroundColor: tRight}}></div>
            <div className="box" style={{backgroundColor: bLeft}}></div>
            <div className="box" style={{backgroundColor: bRight}}></div>
        </div>
    </div>
    
    )
    }}

 //export default Boxes