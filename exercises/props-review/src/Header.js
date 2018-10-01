import React from "react"

const headerStyles = {
    backgroundColor: "blue"
}
function Header(props){
    return (
    <header style={headerStyles}>
        <h1>{props.title}</h1>
    </header>
    )
}

export default Header