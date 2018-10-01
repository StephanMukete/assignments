import React from "react"

import MenuItems from "./MenuItems"

function Sidebar(props){

    return(
        <nav>
            <MenuItems links = {props.menuItems}/>   
        </nav>
    )
}

export default Sidebar;