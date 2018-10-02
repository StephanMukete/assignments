
import React from 'react'


function Child(props) {
    return (
        <div style={{ backgroundColor: props.backgroundColor }}>
            <p>My name is {props.name}</p>
            <p>I am {props.age} years old</p>
            {props.hobbies.join(" ")}
            <p>My grandparent is {props.grandma}</p>
            <hr />
        </div>
    )
}
function Parent(props) {

    const child1Props = {
        backgroundColor: "yellow",
        name: "Erica",
        age: "9",
        hobbies: ["ski", "sharpshooting", "frogger"],
        grandma: props.grandma
    }
    const child2Props = {
        backgroundColor: "green",
        name: "Paul",
        age: "22",
        hobbies: ["snowboarding", "listening"],
        grandma: props.grandma
    }
    
    return (
        <div>
            <h5>Render the child:</h5>
            <Child {...child1Props} />
            <Child {...child2Props} />
        </div>
    )
}

function App() {
    return (
        <div>
            <h3>Render the Parent:</h3>
            <Parent grandma="Big Bad Wolf" />
        </div>
    )
}

export default App;