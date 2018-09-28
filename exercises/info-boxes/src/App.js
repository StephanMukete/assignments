import React from 'react'


function Child(props) {
    return (
        <div style={{ backgroundColor: props.backgroundColor }}>
        <hr />
            <p> TITLE: {props.title}</p>
            <p> SUBTITLE: {props.subtitle}</p>
            <p> INFORMATION: {props.information}</p>
          <hr />
        </div>
    )
}
function Parent(props) {

    const childProps = {
        backgroundColor: "yellow",
        title: "The yellow boss",
        subtitle: "Yellow.com",
        information: "Yellow is good"
    }

    return (
        <div>
            <Child {...childProps} />
        </div>
    )
}

function App() {
  return (
      <div>
          <Parent />
      </div>
  )
}
export default App;