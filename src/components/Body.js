import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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

    const onlineStatus=useOnlineStatus();
if (onlineStatus === false) {
    return <h1>Looks like you are offline. Check your internet connection.</h1>;
}
//conditional rendering -rendering on the basis of condition
// if(listOfRestaurant.length===0){
//     return <Shimmer/>
// }
  
    return (listOfRestaurant?.length??0)  === 0 ?  <Shimmer/> :(
        
        <div className="body">
         
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-s border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="px-4 py-2 bg-green4 rounded=lg bg-green-100 m-4" onClick={()=>{
                        //Filter the restaurants and update the UI
                        console.log(searchText);

                        const filteredRestaurant= listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 " onClick={() => {
                    const filteredList=listOfRestaurant.filter((res)=> res.info.avgRating>4.1);
                    setFilteredRestaurant(filteredList);
                    console.log(listOfRestaurant)
                }}>Top Rated restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
            {filteredRestaurant.map((restaurant) => {

            return <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} />;</Link>
            })}
        </div>
             </div>
    )
}

export default Body;