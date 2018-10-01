import React from "react"

function MenuItems(props){
    const linkElements = props.links.map((link, i) => <li key = {i}>{link}</li> )
    return(
        <ul>
            {linkElements}
        </ul>
    )
}

export default MenuItems;