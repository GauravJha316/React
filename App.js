import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

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


const RestaurantCard=(props)=>{
    const {resData}=props;
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/21/a2d65774-7a0e-4d82-b48e-f7ea48e9952c_9df7225b-ceae-4f5f-bdc2-a6e05e0d8371.jpeg"/>
            <h3>{resData.resName}</h3>
            {/* <h4>{resData.cuisine.join(",")}</h4>  */}
            <h3>{resData.avgRating}</h3>   
            <h3>{resData.costForTwo}</h3>
        </div>
    )
}

const resObj = {
  statusCode: 0,
  data: {
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: { title: "Restaurants near you" },
            gridElements: {
              infoWithStyle: {
                restaurants: [
                  {
                    info: {
                      id: "1001",
                      name: "Burger Hub",
                      cloudinaryImageId: "dummy_burger_01",
                      locality: "Indiranagar",
                      areaName: "Bengaluru",
                      cuisines: ["Burgers", "Fast Food"],
                      avgRating: 4.3,
                      totalRatingsString: "10K+ ratings",
                      sla: { deliveryTime: 24, slaString: "24 mins" },
                      costForTwo: "₹250 for two"
                    }
                  },
                  {
                    info: {
                      id: "1002",
                      name: "Spice Bowl",
                      cloudinaryImageId: "dummy_indian_02",
                      locality: "Koramangala",
                      areaName: "Bengaluru",
                      cuisines: ["North Indian", "Biryani"],
                      avgRating: 4.5,
                      totalRatingsString: "25K+ ratings",
                      sla: { deliveryTime: 30, slaString: "30 mins" },
                      costForTwo: "₹400 for two"
                    }
                  },
                  {
                    info: {
                      id: "1003",
                      name: "Pizza Point",
                      cloudinaryImageId: "dummy_pizza_03",
                      locality: "HSR Layout",
                      areaName: "Bengaluru",
                      cuisines: ["Pizzas", "Italian"],
                      avgRating: 4.1,
                      totalRatingsString: "8K+ ratings",
                      sla: { deliveryTime: 28, slaString: "28 mins" },
                      costForTwo: "₹500 for two"
                    }
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }
};

const Body =()=>{
    const firstRestaurant =
    resObj?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info;   
    return(

        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resData={firstRestaurant[0]}/>  
                              <RestaurantCard resData={firstRestaurant[1]}/>  
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