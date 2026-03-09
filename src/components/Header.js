import { LOGO_URl } from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
   const[btnNameReact,setBtnNameReact]=useState("login");
   console.log("Header render")

   const onlineStatus=useOnlineStatus();

    //if no dependency array =>useEffect is called on every render

    //if dependency array is empty = [] => use Effect will be called on initial render and just once

    //if dependency array is [btnNameReact]=> called  everytime btnNameReact is updated

   useEffect(()=>{
    console.log("useEffect called ")
   }, []);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo">
                <img className="w-56 h-20" src= {LOGO_URl}alt="logo"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">online Status:{onlineStatus ? '✅' :'🀄'}</li>
                    <li className="px-4"> <Link to="/">Home</Link></li>
                    <li className="px-4"> <Link to="/about">About Us</Link></li>
                     <li className="px-4"> <Link to="/grocery">Grocery Us</Link></li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                        </li>
                    <li className="px-4"> Cart</li>
                    <button className="login" onClick={()=>{btnNameReact === "Login" ?setBtnNameReact("Logout"): setBtnNameReact("Login")
                
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;