// import { useEffect } from "react";
// import { MENU_API } from "./constants";

// const useRestaurantMeu =(resId) =>{
//     //fetch data
// const [resInfo,setResInfo]= useState(null);

//     useEffect(()=>{
//         fetchData();
//     }, []);

//     const fetchData = async ()=>{
//         const data=await fetch(MENU_API + resId);

//         const json= await data.json();
//         setResInfo(json.data);
        
//     };
//     return resInfo;
// };

// export default useRestaurantMeu;

import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMeu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        const data = await fetch(`${MENU_API}${resId}`);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMeu;