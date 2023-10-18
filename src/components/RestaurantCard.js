import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restaurantData?.info;
  return (
    <div className="p-4 m-4 w-[270px] bg-gray-100 rounded-lg shadow-lg">
      <img className="res-logo" src={RES_LOGO + cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
