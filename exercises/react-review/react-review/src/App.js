import React from 'react';

function Box(props){
    return(
        <div>
            <hr/>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <a href={props.information}>{props.information}</a>
        </div>
    )
}
function App(){
    const boxInfo = [{
        title: "Intro to react",
        subtitle: "practice",
        information: "https://react.org"
    },
    {
        title: "Intro to Angular",
        subtitle: "practice",
        information: "https://react.org"
    },
    {
        title: "Intro to react",
        subtitle: "practice",
        information: "https://react.org"
    },
    {
        title: "Intro to react",
        subtitle: "practice",
        information: "https://react.org"
    },
    {
        title: "Intro to react",
        subtitle: "practice",
        information: "https://react.org"
    },
    {
        title: "Intro to react",
        subtitle: "practice",
        information: "https://react.org"
    }]
const boxesInfo = [{...

        function App(){
            const boxComponents = boxesInfo.map((boxInfo, i) => <Box key={i} {...boxInfo} />)
        return (
                <div>
                  {boxComponents}
            </div>
        )
    }
}]
  

    