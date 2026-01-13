// const heading=React.createElement("h1", {id:"heading"},("hello world from react"))
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


const parent=React.createElement("div", {id:"Parents"},React.createElement("div",{id:"child"},
[React.createElement("h1", {}, "I am an h1 tag"),React.createElement("h2", {}, "I am an h2 tag")] ),

React.createElement("div",{id:"child2"},
[React.createElement("h1", {}, "I am an h1 tag"),React.createElement("h2", {}, "I am an h2 tag")] )
)
console.log(parent)

const root=ReactDOM.createRoot(document.getElementById("root"))


root.render(parent);
