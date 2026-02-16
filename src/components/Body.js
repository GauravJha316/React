import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from "../utils/mockData";

const Body =()=>{
//Local STate Variable-Super powerful variale

const[listOfRestaurant,setListOfRestaurant]=useState([]);
const[filteredRestaurant,setFilteredRestaurant]=useState([])

const[searchText,setSearchText]=useState("");

useEffect(()=>{
    fetchData();
},[]);

const fetchData = async ()=> {
    try{
    const data=await fetch(
        // "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=28.7040592%26lng=77.1024901"
        "https://foodfire.onrender.com/api/restaurants?lat=17.771678&lng=83.245248&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    console.log(json)
    setListOfRestaurant( json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
    setFilteredRestaurant( json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
}catch(error){
    console.log("fetch error")
}
};

//conditional rendering -rendering on the basis of condition
// if(listOfRestaurant.length===0){
//     return <Shimmer/>
// }
  
    return (listOfRestaurant?.length??0)  === 0 ?  <Shimmer/> :(
        
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        //Filter the restaurants and update the UI
                        console.log(searchText);

                        const filteredRestaurant= listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList=listOfRestaurant.filter((res)=> res.info.avgRating>4.1);
                    setFilteredRestaurant(filteredList);
                    console.log(listOfRestaurant)
                }}>Top Rated restaurants</button>
            </div>
            <div className="res-container">
            {filteredRestaurant.map((restaurant) => {

            return <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} />;</Link>
            })}
        </div>
             </div>
    )
}

export default Body;