import {IMG_CDN_URL} from "../Constant";

const RestaurantCard=({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) =>{
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} /> 
            {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdl4tnyc8wbvysqxzhnq"} />   */}
            <h2>{name}</h2>
            <h3>{cuisines && cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    );
};

export default RestaurantCard;