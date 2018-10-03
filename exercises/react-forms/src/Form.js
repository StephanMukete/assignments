import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {target} = event;
        this.setState({
            [target.name]: target.value,
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.submit(this.state);
        this.setState({username: "", password: ''})
    }
    render() {
        return (
            <form action="" onSubmit = {this.handleSubmit}>
                <label htmlFor="">Username:</label>
                <input name='username' onChange = {this.handleChange} type="text" value = {this.state.username}/>
                <label htmlFor="">Password:</label>
                <input name='password'type='password'onChange = {this.handleChange} value = {this.state.password}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;

// //exercise
// handleSubmit(event){
//     event.preventDefault();
//     this.props.submit(this.state);
//     this.setState({username: "", password: ''})
// }
// render() {
//     return (
//         <form action="" onSubmit = {this.handleSubmit}>
//             <label htmlFor="">Username:</label>
//             <input name='username' onChange = {this.handleChange} type="text" value = {this.state.username}/>
//             <label htmlFor="">Password:</label>
//             <input name='password'type='password'onChange = {this.handleChange} value = {this.state.password}/>
//             <button>Submit</button>
//         </form>
//     )
// }

// //app
// class App extends Component{
//     constructor(){
//         super();
//         this.state = {
//             name:[]
//         }
//     }
//     addName(name){
//         //set state to contain the new name
//     }
//     render(){
//         return(
//             function App() {   
//                 return (
//                   <div >
//                    < Form submit = {inputs => this.addName(inputs.name)}/>
//                   </div>
//                 );
//             }
//         )
//         function App() {   
//             return (
//               <div >
//                < Form submit = {inputs => this.addName(inputs.name)}/>
//               </div>
//             );
//         }
//     }
// }
