
import React from "react"
import Header from "./Header"
import Section from "./Section"

const data = {
  header: {
      title: "My Cool Props Website"
  },
  section: {
      sidebar: {
          menuItems: [
              "Home",
              "About",
              "Contact"
          ]
      },
      main: {
          title: "Props Blog Page",
          blogPosts: [
              { title: "What is props", body: "Props is an object passed between components as an argument" },
              { title: "Why props?", body: "Props lets you easily transfer information across the virtual DOM tree" },
              { title: "Where the props at?", body: "Every component can use props" }
          ]
      }
  },
  footer: {
      copyright: "©2018"
  }
}

function App () {
    return (
      <div>
        <Header title = {data.header.title} />
        <Section sidebar = {data.section.sidebar} main />
      </div>
    )
}

export default App;
