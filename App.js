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
    const {resData  }=props;
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/21/a2d65774-7a0e-4d82-b48e-f7ea48e9952c_9df7225b-ceae-4f5f-bdc2-a6e05e0d8371.jpeg"/>
            <h3>{resData.info.name}</h3>
            {/* <h4>{resData.info.cuisines.join(" , ")}</h4>
             */}
             <h4>{resData.info.cuisines.slice(0, 2).join(", ")}</h4>

            <h3>{resData.info.avgRating}</h3>   
            <h3>{resData.info.costForTwo}</h3>
        </div>
    )
}

const resObj =[
                                    {
                                        "info": {
                                            "id": "1452",
                                            "name": "Subway",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/c90a815a-cee7-47a8-afb2-5e1eabd8be63_1452.jpg",
                                            "locality": "Bull Temple Road",
                                            "areaName": "Basavanagudi",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "sandwich",
                                                "Salads",
                                                "wrap",
                                                "Healthy Food"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "2",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "19K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 2.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-01-26 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-2ae58d99-ab95-4221-aaa2-cab25d44560e"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/subway-bull-temple-road-basavanagudi-rest1452",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "17301",
                                            "name": "KFC",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/66f287f7-536c-4018-925c-808392dd6321_17301.JPG",
                                            "locality": "Basavanagudi",
                                            "areaName": "Basavanagudi",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Fast Food",
                                                "Rolls & Wraps"
                                            ],
                                            "avgRating": 4,
                                            "parentId": "547",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "15K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-01-26 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "6.2K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-2ae58d99-ab95-4221-aaa2-cab25d44560e"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/kfc-basavanagudi-rest17301",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "10892",
                                            "name": "Pizza Hut",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/e86727ff-20ba-437d-97ed-39beaf215871_10892.JPG",
                                            "locality": "B.B.M.P South",
                                            "areaName": "Basavanagudi",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Pizzas"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "721",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 27,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-01-26 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹59"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "1.3K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-2ae58d99-ab95-4221-aaa2-cab25d44560e"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/pizza-hut-b-b-m-p-south-basavanagudi-rest10892",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "457522",
                                            "name": "McDonald's",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/7211fe1a-3260-4c4e-9610-35d1f1fe6941_457522.JPG",
                                            "locality": "Basavanagudi",
                                            "areaName": "Basavanagudi",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Beverages",
                                                "Cafe",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "630",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "7.3K+",
                                            "sla": {
                                                "deliveryTime": 18,
                                                "lastMileTravel": 2.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-01-26 00:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹349",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "9.7K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-2ae58d99-ab95-4221-aaa2-cab25d44560e"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/mcdonalds-basavanagudi-rest457522",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "77949",
                                            "name": "Burger King",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07b2b9e0-f960-4dbb-9f13-789a953f0a35_77949.jpg",
                                            "locality": "Basavanagudi",
                                            "areaName": "Basavanagudi",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "166",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "35K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 2.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-01-26 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.6",
                                                    "ratingCount": "451"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-2ae58d99-ab95-4221-aaa2-cab25d44560e"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/burger-king-basavanagudi-rest77949",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "424558",
                                            "name": "La Pino'z Pizza",
                                            "cloudinaryImageId": "mocil3npmwpcdcfaxql1",
                                            "locality": "Gandhi Bazaar Main Road",
                                            "areaName": "Basavanagudi",
                                            "costForTwo": "₹220 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Pastas",
                                                "Italian",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "4961",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "5.5K+",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 2.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-01-26 00:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹79"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "1.5K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-2ae58d99-ab95-4221-aaa2-cab25d44560e"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-gandhi-bazaar-main-road-basavanagudi-rest424558",
                                            "type": "WEBLINK"
                                        }
                                    }];


const Body =()=>{

    return(

        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard 
                    resData={resObj[0]}/>
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