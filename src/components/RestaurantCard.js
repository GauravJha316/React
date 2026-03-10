import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData  }=props;
    if (!resData?.info) return null;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
      } =resData.info;
      return(
   
        <div className="m-3 p-3 w-[170px] rounded-lg hover:bg-gray-400" >
            <img alt="res-logo" className="rounded-lg" src={CDN_URL+ cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
             <h4>{cuisines?.slice(0, 2).join(", ")}</h4>
            <h3>{avgRating}</h3>   
            <h3>{costForTwo}</h3>
            <h4>{sla?.deliveryTime} mins</h4>
        </div>
      )
}

export default RestaurantCard;