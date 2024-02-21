import { CDN_URL } from "../utils/constants";

const RestaurantCardComponent = ({ resCard }) => {
  const { name, cuisines, avgRating, costForTwo, sla } =
    resCard?.card.card.info;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + resCard.card.card.info.cloudinaryImageId}
        alt="restaurantLogo"
        className="res-logo"
      />
      <p className="restaurant-name zero-margin">{name}</p>
      <div className="sla-and-rating zero-margin">
        <h5>{avgRating} stars</h5>
        <h5>{sla.slaString}</h5>
      </div>
      <p className="cuisines zero-margin">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCardComponent;
