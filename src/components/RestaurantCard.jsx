import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="w-56 h-80 p-3 m-2 rounded-xl bg-gray-100 hover:shadow-lg">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt=""
        className="w-full h-28 object-cover rounded-xl"
      />
      <div className="res-details">
        <h2 className="my-2 font-bold">{name}</h2>
        <div className="res-description">
          <div className="res-rating ">
            <h4>{avgRating}⭐ •</h4>
            <p className="side-margin">{sla.deliveryTime + "mins"}</p>
          </div>
          <p className="cuisine ">{cuisines.join(", ")}</p>
          <h3 className="res-costForTwo">{costForTwo}</h3>
        </div>
      </div>
    </div>
  );
};
export const HighRating = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label
          htmlFor=""
          className="absolute top-2 bg-black text-white p-1 rounded-xl"
        >
          Foodie's Choice
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
