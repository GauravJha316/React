import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

//react element using react
// const heading=React.createElement("h1",{id:"heading"},"namaste React")
// console.log(heading)

//react element using jsx


// React element
// const elem=<span>React element</span>;
// const Title = ()=> (

//     <h1 className="head">Namaste React using JSX</h1>
// );

// //ReactComponent
// //its a Component composition 
// const HeadingComponent =() =>(
//     <div id="container">
        
//         <h1 className="heading"> Namaste React</h1>
//         <Title/>
//     </div> 
// )

// const root=ReactDOM.createRoot(document.getElementById("root"));
 
// // root.render(heading);
const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.pinterest.com/pin/266064290473852933/" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard=()=>{
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/21/a2d65774-7a0e-4d82-b48e-f7ea48e9952c_9df7225b-ceae-4f5f-bdc2-a6e05e0d8371.jpeg"/>
            <h3>Vanilla Bento Cake
                </h3>
            <h4>Briyani North India, Aisan</h4> 
            <h3>4.4 star</h3>   
            <h3>38 minute</h3>
        </div>
    )
}
const Body =()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/>  <RestaurantCard/>  <RestaurantCard/>  <RestaurantCard/>  <RestaurantCard/>  <RestaurantCard/>  <RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout =() =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);