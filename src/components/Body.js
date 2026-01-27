import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";
import resList from "../utils/mockData";

const Body =()=>{
//Local STate Variable-Super powerful variale

const[listOfRestaurant,setListOfRestaurant]=useState(resList);


  
    return(
        
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList=listOfRestaurant.filter((res)=> res.info.avgRating>4.1);
                    setListOfRestaurant(filteredList);
                    console.log(listOfRestaurant)
                }}>Top Rated restaurants</button>
            </div>
            <div className="res-container">
            {listOfRestaurant.map((restaurant) => {

            return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
            })}
        </div>
             </div>
    )
}

export default Body;