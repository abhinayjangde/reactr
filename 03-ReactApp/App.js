import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("div", {id:"parent"},
//     [
//         React.createElement(
//             "p",
//             {},
//             "I am paragraph"
//         )
//     ]
// )

const jsxHeading = (<h1>Hello from JSX</h1>) // React Element

// console.log(jsxHeading)

const Footer = ()=>(
    <div>Footer on Website</div>
)
const elem = <span>React Element</span>
// React Functional Component
const Card = ()=>{
    return (
        <div>
            <Block/>
            {elem}
            <h1>Title</h1>
            <p>Descriptiong</p>
            {/* {Footer()} */}
            <Footer/>
        </div>
    )
}

function Home(){
    return <p>Home Page</p>
}

const Block = ()=>{
    return (
        <div>
            I am a block
        </div>
    )
}

// ReactDOM.createRoot(document.getElementById("root"))
// .render(Card())
ReactDOM.createRoot(document.getElementById("root"))
.render(<Card/>)