import React, {Component}  from 'react';
import Form from "./Form"

function App() {   
    return (
      <div >
       < Form submit = {inputs => alert(`Welcome to my app, ${inputs.username}. Your pw is ${inputs.password}`)}/>
      </div>
    );
}

export default App;

// class App extends Component{
//   constructor(){
//      super();
//      this.state ={
//        names:[]
//      }
//   }
//   addName(){
//     //set state with new name here
//   }
//   render(){
//     return (
//       <div>
//         {/*Form goes here, add username as props*/}
//         {/*list names here*/}
//       </div>
//     )
//   }
// }