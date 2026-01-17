import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

//react element using react
// const heading=React.createElement("h1",{id:"heading"},"namaste React")
// console.log(heading)

//react element using jsx


// React element
const Title = ()=> (
    <h1>Namaste React using JSX</h1>
);

//ReactComponent
//its a Component composition 
const HeadingComponent =() =>(
    <div id="container">
        <h1 className="heading"> Namaste React</h1>
        <Title/>
    </div> 
)

const root=ReactDOM.createRoot(document.getElementById("root"));
 
// root.render(heading);
root.render(<HeadingComponent/>);