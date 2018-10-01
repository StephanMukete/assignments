import React from "react";

import Sidebar from "./Sidebar";

function Section(props){

    return(
        <section>
            <Sidebar menuItems = {props.sidebar.menuItems} />

        </section>
    )
}

export default Section;