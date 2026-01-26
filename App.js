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
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ cloudinaryImageId}/>
            <h3>{name}</h3>
             <h4>{cuisines?.slice(0, 2).join(", ")}</h4>
            <h3>{avgRating}</h3>   
            <h3>{costForTwo}</h3>
            <h4>{sla?.deliveryTime} mins</h4>
        </div>
    )
}
  

const resList = [
  {
    info: {
      id: "22247",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/42f23584-f43f-4c2e-a2ca-df95f0652ff7_22247.jpg",
      locality: "Ascendas Park Square",
      areaName: "Whitefield",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "20K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-ascendas-park-square-whitefield-rest22247",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23822",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/5a7e6d85-8cad-49d8-98c3-96a2d005e6a6_23822.JPG",
      locality: "Doddanekkundi",
      areaName: "Mahadevpura",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          { imageId: "android/static-assets/icons/big_rx.png", description: "bolt!" },
          { imageId: "Rxawards/_CATEGORY-Pizza.png", description: "Delivery!" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dominos-pizza-doddanekkundi-mahadevpura-rest23822",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "722329",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/531ba48c-a497-45b1-bf67-cc03a3ca94aa_722329.JPG",
      locality: "Hoodi",
      areaName: "Hoodi",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "721",
      avgRatingString: "4.4",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.7",
          ratingCount: "2.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-hoodi-rest722329",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "65769",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/898fe0c8-3526-4b28-849b-77cf9a6cb998_65769.jpg",
      locality: "ITPL Main Road",
      areaName: "Whitefield",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "51K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "2.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-itpl-main-road-whitefield-rest65769",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23688",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/f4361673-33b0-4a1e-9534-791fc6838461_23688.JPG",
      locality: "Whitefield",
      areaName: "Brookefield",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "89K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "9.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-whitefield-brookefield-rest23688",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "31518",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/83224095-f9e2-44ed-9315-afd94cf578bf_31518.JPG",
      locality: "Ascendas Park Square",
      areaName: "Kadugodi",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-ascendas-park-square-kadugodi-rest31518",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "621838",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/526f725d-9ddf-4b52-ba5b-1a9402673a78_621838.jpg",
      locality: "AECS Layout",
      areaName: "Marathahalli",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.5",
      totalRatingsString: "3.7K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 01:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹799",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-aecs-layout-marathahalli-rest621838",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "813369",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "e5f54df4ed8bac458b801ede76ee37d0",
      locality: "Whitefield",
      areaName: "Upkar Layout",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "4961",
      avgRatingString: "4.2",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-whitefield-upkar-layout-rest813369",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "489129",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Anand Nagar",
      areaName: "Marathahalli",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "61955",
      avgRatingString: "4.2",
      totalRatingsString: "6.9K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-anand-nagar-marathahalli-rest489129",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "688712",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/6/382db436-a3a9-43bf-89b8-e0be44aaa307_688712.JPG",
      locality: "Whitefield",
      areaName: "Whitefield",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "5.2K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          { imageId: "Rxawards/_CATEGORY-Desserts.png", description: "Delivery!" },
          { imageId: "newg.png", description: "Gourmet" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.6",
          ratingCount: "149",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/theobroma-whitefield-rest688712",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "113317",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/2/fafb534d-6a5b-423b-900d-9feb3859ea87_113317.JPG",
      locality: "Brookefield",
      areaName: "Bengaluru Urban",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.5,
      parentId: "3818",
      avgRatingString: "4.5",
      totalRatingsString: "16K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/bakingo-brookefield-bengaluru-urban-rest113317",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10826",
      name: "California Burrito",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/9da306ad-e8ac-4ccf-b80e-efcd5aa8fa61_10826.jpg",
      locality: "Ascendas Park Square",
      areaName: "Whitefield",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food",
      ],
      avgRating: 4.6,
      parentId: "1252",
      avgRatingString: "4.6",
      totalRatingsString: "24K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          { imageId: "High%20Protein/rx%20tag%205.png", description: "High Protein" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "High Protein",
                  imageId: "High%20Protein/rx%20tag%205.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/california-burrito-ascendas-park-square-whitefield-rest10826",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "285116",
      name: "Dindigul Thalappakatti - Since 1957\n",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/e0216f5f-a59e-4d3d-8c1c-915463fc3fd7_285116.JPG",
      locality: "Whitefield",
      areaName: "Whitefield",
      costForTwo: "₹600 for two",
      cuisines: ["Biryani", "Barbecue", "South Indian", "Chinese", "North Indian"],
      avgRating: 4.2,
      parentId: "641506",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "531",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-since-1957-whitefield-rest285116",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "360",
      name: "Beijing Bites",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/30fa9e0b-bfe8-439f-b648-78987ceade91_360.jpg",
      locality: "Whitefield",
      areaName: "Whitefield",
      costForTwo: "₹450 for two",
      cuisines: ["Chinese", "Thai"],
      avgRating: 4.3,
      parentId: "103",
      avgRatingString: "4.3",
      totalRatingsString: "29K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.7",
          ratingCount: "440",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/beijing-bites-whitefield-rest360",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "410343",
      name: "Biryani By Kilo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/70203c5c-2ea7-4d81-9e38-8f4e83bebde6_410343.JPG",
      locality: "Santosh Tower",
      areaName: "Whitefield",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Hyderabadi", "North Indian", "Kebabs", "Mughlai", "Desserts"],
      avgRating: 4,
      parentId: "130",
      avgRatingString: "4.0",
      totalRatingsString: "6.5K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-26 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          { imageId: "android/static-assets/icons/big_rx.png", description: "bolt!" },
          { imageId: "newg.png", description: "Gourmet" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              { attributes: { description: "bolt!", imageId: "android/static-assets/icons/big_rx.png" } },
              { attributes: { description: "Gourmet", imageId: "newg.png" } },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.0",
          ratingCount: "203",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/biryani-by-kilo-santosh-tower-whitefield-rest410343",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "390055",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/fe7c12a9-c7eb-4031-b68c-dfef4efebc6e_390055.jpg",
      locality: "KIADB Industrial Area",
      areaName: "Whitefield",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.5,
      parentId: "22452",
      avgRatingString: "4.5",
      totalRatingsString: "927",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [{ imageId: "android/static-assets/icons/big_rx.png", description: "bolt!" }],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-kiadb-industrial-area-whitefield-rest390055",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "289262",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/7c347d5f-6aea-42ec-a966-f4bcf7b79fe9_289262.jpg",
      locality: "Santosh Tower",
      areaName: "Whitefield",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.5,
      parentId: "10655",
      avgRatingString: "4.5",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [{ imageId: "android/static-assets/icons/big_rx.png", description: "bolt!" }],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/box8-desi-meals-santosh-tower-whitefield-rest289262",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "622027",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/97fd8477-e108-45e7-9b95-5baa2244df32_622027.jpg",
      locality: "ITPL",
      areaName: "Whitefield",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.5,
      parentId: "11329",
      avgRatingString: "4.5",
      totalRatingsString: "670",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [{ imageId: "android/static-assets/icons/big_rx.png", description: "bolt!" }],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-itpl-whitefield-rest622027",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "391003",
      name: "ZAZA Mughal Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/edbddc2d-8a96-46b3-b920-92ba1c648a68_391003.jpg",
      locality: "KIADB Industrial Area",
      areaName: "Whitefield",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "North Indian", "Awadhi"],
      avgRating: 4.2,
      parentId: "22473",
      avgRatingString: "4.2",
      totalRatingsString: "783",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [{ imageId: "android/static-assets/icons/big_rx.png", description: "bolt!" }],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-kiadb-industrial-area-whitefield-rest391003",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "349072",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/2de20731-7a7e-4706-b1f8-f3bc0e60e52d_349072.JPG",
      locality: "Kundanahalli, Brookefield",
      areaName: "Marathahalli",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-27 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          { imageId: "v1695133679/badges/Pure_Veg111.png", description: "pureveg" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹51",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-545ce24e-38ab-44e3-9c38-479b98eca2dd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-kundanahalli-brookefield-marathahalli-rest349072",
      type: "WEBLINK",
    },
  },
];



const Body =()=>{

    return(
        
        <div className="body">
            <div className="search">
                Search
            </div>
            {/* <div className="res-container">
                
                {
                    resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }

            </div> */}
            <div className="res-container">
  {resList.map((restaurant, index) => {
    console.log(index, restaurant?.info?.name);
    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
  })}
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