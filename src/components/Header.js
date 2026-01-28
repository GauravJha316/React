import { LOGO_URl } from "../utils/constants";
import { useState } from "react";
const Header=()=>{
   const[btnNameReact,setBtnNameReact]=useState("login");

    return(
        <div className="header">
            <div className="logo">
                <img src= {LOGO_URl}alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{btnNameReact === "Login" ?setBtnNameReact("Logout"): setBtnNameReact("Login")
                
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;