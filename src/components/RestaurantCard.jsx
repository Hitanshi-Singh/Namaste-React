import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card m-secondary">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt=""
        className="res-card-image"
      />
      <div className="res-details">
        <h2 className="top-margin-primary">{name}</h2>
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

export default RestaurantCard;
