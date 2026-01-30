import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu =()=>{

    const[resInfo,setResInfo] = useState(null)

        useEffect(()=>{
            fetchMenu();
        }, []);

        const fetchMenu = async()=>{
            const data = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=651011&catalog_qa=undefined&submitAction=ENTER"
            );
            const json= await data.json();

            console.log(json)
        };
    }
    export default RestaurantMenu;

// import { useEffect, useState } from "react";
// import apiData from "../utils/apidata";

// const RestaurantMenu = () => {
//   const [restaurant, setRestaurant] = useState(null);

//   useEffect(() => {
//     // simulate API call
//     setRestaurant(apiData[0].info);
//   }, []);

//   if (!restaurant) return <h2>Loading...</h2>;

//   return (
//     <div className="menu">
//       <h1>{restaurant.name}</h1>

//       <p>
//         <strong>Cuisines:</strong>{" "}
//         {restaurant.cuisines || "Not available"}
//       </p>

//       <p>
//         <strong>Cost for Two:</strong>{" "}
//         {restaurant.costforTwoMessage || "Not available"}
//       </p>
//     </div>
//   );
// };

// export default RestaurantMenu;
