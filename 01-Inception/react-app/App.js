
const parent = React.createElement(
    "div",
    {},
    [React.createElement(
        "div",
        {},
        React.createElement(
            "h1",
            {},
            "I am child h1 tag"
        )
    ),
    React.createElement(
        "div",
        {},
        "I at the same level of parent div"
    )]
)
const heading = React.createElement("h1", {id:"attribute1",title:"hello"}, "Hello from React App")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
