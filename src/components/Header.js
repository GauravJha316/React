import { LOGO_URl } from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
const Header=()=>{
   const[btnNameReact,setBtnNameReact]=useState("login");
   console.log("Header render")

    //if no dependency array =>useEffect is called on every render

    //if dependency array is empty = [] => use Effect will be called on initial render and just once

    //if dependency array is [btnNameReact]=> called  everytime btnNameReact is updated

   useEffect(()=>{
    console.log("useEffect called ")
   }, []);

    return(
        <div className="header">
            <div className="logo">
                <img src= {LOGO_URl}alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                        </li>
                    <li> Cart</li>
                    <button className="login" onClick={()=>{btnNameReact === "Login" ?setBtnNameReact("Logout"): setBtnNameReact("Login")
                
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;