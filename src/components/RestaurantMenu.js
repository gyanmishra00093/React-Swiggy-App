import { useParams } from "react-router-dom"; 
import {useEffect,useState} from "react";
import {IMG_CDN_URL} from "../Constant";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const cloudinaryImageId="vw6n5betlssnqelt7rmu";

    const {id}=useParams();
    const [restaurant,setRestaurant]=useState(null);

    useEffect(() =>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        const data=await fetch("https://www.swiggy.com/restaurants/zoomenod-pizza-sector-137-sector-135-noida-1-526592?restaurant_id=526592&source=collection&query=Pizza" + id);
        const json=await data.json();
        setRestaurant(json.data);
        console.log(json.data); 

    }

    return !restaurant ? (
    <Shimmer />
    ):(
    <div className="menu">
        <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
        <h1>Menu</h1>   
         </div>
         <div>
            <h1>Menu</h1>
            <ul>
                {restaurant?.menu?.items && Object.values(restaurant?.menu?.items).map((item) =><li key={item.id}>{item.name}</li>)}
            </ul>
         </div>
    </div>



    // <div>
    //     <h1>Restaurant id: {id}</h1>
    //     <h2>{restaurant.name}</h2>
    //     <img src={IMG_CDN_URL + cloudinaryImageId} />
    // </div>
    )
}

export default RestaurantMenu;
