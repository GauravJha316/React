import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
const RestaurantMenu =()=>{

    const[resInfo,setResInfo] = useState(null)

    const param=   useParams();
    console.log(param)

        useEffect(()=>{
            fetchMenu();
        }, []);

        const fetchMenu = async()=>{
            const data = await fetch( 
                 `${MENU_API}${param.resId}`
                // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=651011&catalog_qa=undefined&submitAction=ENTER"
                //  "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=766502"
                //72605 74644

            );
            const json= await data.json();

            console.log("mennu",json)
            setResInfo(json.data)
        };

            if(resInfo===null) {
                return

            <Shimmer/>;
            }
        const{name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
        const itemCards =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.find(c => c?.card?.card?.itemCards)
        ?.card?.card?.itemCards;
        console.log(itemCards)
        return(

            <div>
                <h1>{name}</h1> 
                <p>{cuisines.join(", ")}, {costForTwoMessage}</p>
                <ul>
                    {itemCards.map((item)=><li key={item.card.info.id}>
                        {item.card.info.name}-{"Rs."}-{item.card.info.price/100}
                        </li>)}
                    {/* <li>{itemCards[0]?.card?.info?.name}</li>
                    <li>{itemCards[1]?.card?.info?.name}</li> */}
                </ul>
            </div>
        )
    }
    export default RestaurantMenu;


